# coinmarketcal-node-wrapper

A simple CoinMarketCal API node.js wrapper for v1.

## Installation
* Clone repository

```
git clone https://github.com/jagodin/coinmarketcal-node-wrapper
```

* Install dependencies

```
npm install
```

## Getting Started

Get your API key from https://coinmarketcal.com/en/api.

Initialize object with your API key.

```
const coinmarketcal = new CoinMarketCal('YOUR_API_KEY')
```

## Example

```
const CoinMarketCal = require('./lib/index.js');

// Get your API key here: https://coinmarketcal.com/en/developer/register
var apiKey = 'YOUR_API_KEY';

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
```
