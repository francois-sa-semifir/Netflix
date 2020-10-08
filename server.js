var express = require('express');
var app = express();
app.use(express.static('dist/Netflix'));
app.get('/', (req, res, next)=>{res.redirect('/');})
app.listen(8080)