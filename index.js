var readlineSync = require('readline-sync');
let Complex = require('complex.js');
const express = require('express')
const app = express();

let nroComplejo = readlineSync.question('Ingrese un numero complejo(formato (xx)+(yy)i) ');
var c = new Complex(nroComplejo);

let mensaje=('El modulo es '+(c.abs()).toString()+'y el angulo es'+(c.arg()).toString());

app.get('/', function (req, res) {
    res.send(mensaje)
})
console.log('Su rta estara en su servidor port:3000');
app.listen(3000);