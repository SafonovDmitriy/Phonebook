var config = require("./config.json")
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./db")
var app = express();
var contactsController = require('./controllers/contacts')
var cors = require("cors");
app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', function (req, res) { res.send('<h1>Hello World111</h1>') })
app.get('/contact', contactsController.all )
app.get('/contact/:id', contactsController.findAtId)
app.post('/contact', contactsController.create)
app.put('/contact/:id', contactsController.update)
app.delete('/contact/:id', contactsController.delete)

db.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, function (err) {
    if (err) {
        console.error(err)
        return res.sendStatus(500)
    }
    app.listen(Number(config.serverPort), function () {
        console.log(`Server started on port ${config.serverPort}`)
    })
})