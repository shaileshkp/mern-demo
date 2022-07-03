const { Users } = require("../../data-access");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.login = async function(req, res) {
    // TODO: Checks for data correctness
    let {email, password} = req.body;
    console.log(`email ${email} password ${password}`)
    let query = {}
    if (email && password) {
        query['email'] = email
    } else {
        return res.status(500).send('Invalid request!')
    }
    Users.getUserByQuery(query, (err, uResult) => {
        console.log('err : ', err)
        console.log('result : ', uResult)
        if (uResult && uResult.length) {
            let user = uResult[0]
            bcrypt.compare(password, user.password, function(err, isCorrect) {
                if (isCorrect) {
                   // create cookie and send 
                   const token = jwt.sign({ user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                      expiresIn: "2h",
                    }
                  );
                   res.send({
                       isCorrect,
                       token
                   })
                } else {
                    // TODO: update +1 in fAttempts
                    // check if attempts are == 3 then update fAttempts to blocked = true
                    res.status(400).send({'message': "Please input valid password."})
                }

            })
        } else {
            res.status(400).send({'message': "Please input valid user email."})
        }
    })
}