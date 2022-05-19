const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.post('/registro', (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    res.send(`Su nombre es:  ${name} y su contraseña  es: ${password}`);
})


  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
