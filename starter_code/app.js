
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/layout', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
    .then(beers => {
      // console.log(beers); res.render is a handlebar thing
      res.render('beers', { beers });
    })
    .catch(error => {
      console.log(error)
    })

});

// app.get('/apple', (req,res,next)=>{
//   res.render('banana') // render "views/banana.hbs"
// })


app.listen(3000);
