const { getDbClient } = require("../helpers/db")

exports.createUser = (userData, cb) => {
    try {
        getDbClient((err, db) => {
            if (err) {
                cb(err, null)
            } else {
                let collection = db.collection('users');
                collection.insertOne(userData, (err, res) => {
                    cb(err, res)
                })
            }
        }) 
    } catch (error) {
        cb(error, null)
    }
}

function getUserById(userId, cb) {

}

exports.getUserByQuery = (query, cb) => {
    try {
        if (query) {
            getDbClient((err, db) => {
                if (err) {
                    cb(err, null)
                } else {
                    let collection = db.collection('users');
                    collection.find(query).toArray((err, res) => {
                        cb(err, res)
                    })
                }
            }) 
        } else {
            cb(true, [])
        }
    } catch (error) {
        cb(error, null)
    }
}
