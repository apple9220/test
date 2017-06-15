// require and instantiate express
var express = require('express'),
	  path = require('path');
var app = express();

app.use(express.static(__dirname + '/public'))

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', {})
})

app.listen(8080)

console.log('listening on port 8080')