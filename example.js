const CoinMarketCal = require('coinmarketcal');

// Get your API key here: https://coinmarketcal.com/en/developer/register
apiKey = 'YOUR_API_KEY';

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