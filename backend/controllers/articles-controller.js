const axios = require('axios');
const { Article } = require('./../models/article');
const cheerioAdv = require('cheerio-advanced-selectors');
const cheerio = cheerioAdv.wrap(require('cheerio'));

const scrape = (req, res) => {
    var _error = 0;
    Article.remove({}, (err) => {
        if (err) {
        }
    })

    axios.get('https://www.usmagazine.com/celebrity-news/')
        .then(response => {
            // console.log(response.data)
            const $ = cheerio.load(response.data)

            const header$ = $('.content-card-title');
            var imgURL$ = $('img');
            const imgLink$ = $('.content-card-link');

            imgURL$.splice(0, 1);
            for (let i = 0; i < header$.length; i++) {
                let header = $(header$[i]).text();
                let imgURL = $(imgURL$[i]).attr('src');
                let imgLink = $(imgLink$[i]).attr('href');

                // findIndex of ? and remove everything to the right
                console.log(imgURL)
                let index = imgURL.indexOf('?');

                imgURL = imgURL.substring(0, index);

                var article = {
                    headline: header,
                    imgURL: imgURL,
                    link: imgLink
                }
                // console.log(article)
                let newArticle = new Article(article);

                Article.create(newArticle)
                    .catch(err => console.log(err));
            }
        })
    if (_error > 0) {
        res.status(500).json({ error: "Error" })
    } else {
        res.status(200).json({ message: "Successfully scraped." });
    }
}

const index = (req, res) => {
    Article.find().exec((err, articles) => {
        if (err) {
            res.status(500).json(err);
        } else if (articles.length === 0) {
            res.status(404).json({ message: 'No data found' })
        } else {
            res.json(articles)
        }
    })
}

module.exports = {
    scrape,
    index
}