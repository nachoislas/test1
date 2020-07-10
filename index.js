var readlineSync = require('readline-sync');
var Complex = require('complex.js');
const express = require('express')
const app = express();

let nroComplejo = readlineSync.question('Ingrese un numero complejo(formato (xx)+(yy)j) ');


app.get('/', function (req, res) {
  res.send('El modulo de su numero complejo es ',abs(nroComplejo),'y su fase es ',arg(nroComplejo))
})
 
app.listen(3000);