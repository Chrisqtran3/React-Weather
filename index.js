const express = require('express');

// Create app
let app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
	if(req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

// Tell which folder to use
app.use(express.static('public'));

app.listen(port, function() {
	console.log('Listening on port', port);
});