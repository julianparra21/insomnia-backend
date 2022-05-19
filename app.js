const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.post('/login', (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    res.send(`Su nombre es:  ${name} y su contraseña  es: ${password}`);
});
app.post('/registro', (req, res) => {
    let nombres = req.body.nombres;
    let apellido = req.body.apellido;
    let telefono = req.body.telefono;
    let  gmail = req.body.gmail;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    let genero = req.body.genero;
    let contraseña = req.body.contraseña;
    let confi_contraseña = req.body.confi_contraseña;
    res.send(`su registro nombre es: ${nombres},su apellido es: ${apellido},su telefono es ${telefono}, su correo es ${gmail}, su fecha de nacimiento es ${fecha_nacimiento}, su genero es:${genero}, su contraseña es:${contraseña},su contraseña de confirmacion es: ${confi_contraseña}`);
  })

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
