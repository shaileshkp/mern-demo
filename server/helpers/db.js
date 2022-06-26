let _mongoClient;

exports.getDbClient = (cb) => {
    // Connection URL
    if (!_mongoClient) {
        const db_url = process.env.MONGODB_URI;
        if (db_url) {
            const { MongoClient } = require('mongodb');
            MongoClient.connect(db_url, function(err, db) {
                if (err) {
                    console.error('Error retrieveing Mongo DB Client ' + err.toString());
                } else {
                    _mongoClient = db.db('instagram');
                    // _mongoClient.on('close', function() {
                    //     _mongoClient = null;
                    // });
                }
                try {
                    cb(err, _mongoClient);
                } catch (unhandledErr) {
                    console.error('Unhandled Error while returning connection from mongodb. Error: ', unhandledErr);
                }
            });
        } else {
            console.error("Error: DB url not configured.");
        }
    } else {
        try {
            cb(null, _mongoClient);
        } catch (unhandledErr) {
            console.error('Unhandled Error while returning connection from mongodb. Error: ', unhandledErr);
        }
    }
}