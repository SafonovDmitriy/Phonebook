var Contacts = require('../models/contacts')

exports.all = function (req, res) {
    Contacts.all(function (err, docs) {
        if (err) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(docs)

    })
}
exports.findAtId = function (req, res) {
    Contacts.findAtId(req.params.id, function (err, docs) {
        if (err) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })
}
exports.create = function (req, res) {
    var contact = {
        name: req.body.name,
        surename: req.body.surename,
        company: req.body.company,
        email: req.body.email,
        photo: req.body.photo,
        number: req.body.number
    }

    Contacts.create(contact, function (err, docs) {
        if (err) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(docs)


    })
}
exports.update = function (req, res) {

    Contacts.update(req.params.id, {
        name: req.body.name,
        surename: req.body.surename,
        company: req.body.company,
        email: req.body.email,
        photo: req.body.photo,
        number: req.body.number
    }, function (err, docs) {
        if (err) {
            console.error(err)
            return res.sendStatus(500)
        }

        res.send(docs)
    })
}
exports.delete = function (req, res) {
    Contacts.delete(req.params.id, function (err, docs) {
        if (err) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })
}