var db = require("../db")
var ObjectID = require('mongodb').ObjectID


exports.all = function (cb) {
    db.get().collection('contacts').find().toArray(function (err, docs) {
        cb(err, docs)

    })
}
exports.findAtId = function (id, cb) {
    db.get().collection('contacts').findOne({ _id: ObjectID(id) }, function (err, docs) {
        cb(err, docs)
    })
}
exports.create = function (contact, cb) {
    db.get().collection('contacts').insert(
        { ...contact },
        function (err, result) {
            cb(err, result)
        }
    )
}
exports.update = function (id, newDate, cb) {
    db.get().collection('contacts').findOne({ _id: ObjectID(id) }, function (err, docs) {

        db.get().collection('contacts').updateOne(
            { _id: ObjectID(id) },
            { ...newDate },
            function (err, result) {
                cb(err, result)
            })
    })

}
exports.delete = function (id, cb) {
    db.get().collection('contacts').deleteOne(
        { _id: ObjectID(id) },
        function (err, result) {
            cb(err, result)
        })

}