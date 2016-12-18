const express = require('express');

// Create app
let app = express();

// Tell which folder to use
app.use(express.static('public'));

app.listen(3000, function() {
	console.log('Listening on port 3000');
});