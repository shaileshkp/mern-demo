const { Users } = require("../../data-access");
const bcrypt = require('bcrypt');

exports.signup = async function(req, res) {
    let { body } = req;
    console.log(`body ${body}`)
    let isValid = true;
    // TODO: Checks for data correctness
    if (!body.name) isValid = false;
    body.password = await bcrypt.hash(body.password, 10);
    
    Users.createUser(body, (err, newUser) => {
        console.log('err : ', err)
        console.log('newUser : ', newUser)
        res.send(newUser)
    })
}