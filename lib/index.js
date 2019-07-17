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

// Get your API key here: https://coinmarketcal.com/en/developer/register
apiKey = 'SUJDQfIY6U4UDWbsNEED7rtCkhElHacaWFibIVIj';

const coinmarketcal = new CoinMarketCal(apiKey);

// Retrieve list of coins
coinmarketcal.getCoins(function (coins) {
    console.log(coins);
})

// Retrieve list of categories
coinmarketcal.getCategories(function (categories) {
    console.log(categories);
})

// Retrieve list of events for a specific coin
// The events response takes an additional parameter to query for events.
// The event parameters can be found at https://coinmarketcal.com/en/doc/redoc#/paths/~1events/get
const eventQuery = {
    max: '10',
    coins: 'bitcoin'
}

coinmarketcal.getEvents(eventQuery, function (events) {
    console.log(events);
})