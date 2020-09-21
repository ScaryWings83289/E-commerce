var express      = require('express'),
    app          = express(),
    bodyParser   = require('body-parser'),
    path         = require('path');

var port = process.env.PORT || 3000;

// Requiring Routes
var indexRouter = require('./routes/index');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Set the default views directory to public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log('Server is running at localhost: '+ port);
});