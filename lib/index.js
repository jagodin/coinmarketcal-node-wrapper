const request = require('request');
var coinmarketcalURL = 'https://developers.coinmarketcal.com/v1';

var events = '/events';
var categories = '/categories';
var coins = '/coins';

class CoinMarketCal {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    sendRequest(options, callback) {
        return new Promise((resolve, reject) => {
            request(options, (err, response, body) => {
                if (response.statusCode === 400) {
                    throw new Error();
                } else if (response.statusCode === 401) {
                    throw new Error();
                } else {
                    resolve(callback(JSON.parse(body)));
                }
            });
        });
    }

    getCoins(callback) {
        const endpoint = buildURL(coins);

        const options = {
            method: 'GET',
            url: endpoint,
            headers: {
                Accept: 'application/json',
                'Accept-Encoding': 'deflate, gzip',
                'x-api-key': this.apiKey
            }
        };

        this.sendRequest(options, callback);
    }

    getCategories(callback) {
        const endpoint = buildURL(categories);

        const options = {
            method: 'GET',
            url: endpoint,
            headers: {
                Accept: 'application/json',
                'Accept-Encoding': 'deflate, gzip',
                'x-api-key': this.apiKey
            }
        };

        this.sendRequest(options, callback);
    }

    getEvents(eventQuery, callback) {
        var endpoint = buildURL(events);

        const options = {
            method: 'GET',
            url: endpoint,
            qs: eventQuery,
            headers: {
                Accept: 'application/json',
                'Accept-Encoding': 'deflate, gzip',
                'x-api-key': this.apiKey
            }
        };

        this.sendRequest(options, callback)
    }
}

function buildURL(resource) {
    return coinmarketcalURL + resource
}

module.exports = CoinMarketCal;
