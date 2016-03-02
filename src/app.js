/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

// Create a Card with title and subtitle
var card = new UI.Card({
	title: 'Weather',
	subtitle: 'Fetching...'
});

// Display the Card
card.show();