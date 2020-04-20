const express = require('express')
var hbs = require('hbs');
require('./hbs/helpers');

const app = express()
app.use(express.static(__dirname + '/public'))

//EXPRES HBS engine
app.set('view engine', 'hbs')

//PARCIALES
hbs.registerPartials(__dirname + "/views/parciales");


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'bRaYan',
    });
})

app.get('/about', function(req, res) {
    res.render('about')
})



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})