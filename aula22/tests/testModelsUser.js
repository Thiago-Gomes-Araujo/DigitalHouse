const {User} = require('../models');

/* User.create({
    name: "Thiago Gomes",
    email: "thiago@administrador.com",
    password: "123456"
});
 */
User.findAll().then(
    users => {
        console.log(users[1].toJSON());
        /* process.exit(); */
    }
)

/* User.findByPk(2).then(
    user => console.log(user.toJSON())
) */