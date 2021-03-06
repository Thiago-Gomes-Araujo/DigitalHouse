const bcrypt = require("bcrypt");
const users = require("../data/users");
const { User } = require("../models");
const cards = require("../data/cards");
const saveData = require("../utils/saveData");

module.exports = {
  create(req, res, next) {
    res.render('create-user');
  },

/* async create(req, res, next) {
  let users = await User.findAll();
  console.log(users);
  res.render('create-user');
}, */


  async save(req, res, next) {
    /* let id = users.length + 1; */
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let user = {...req.body };
    await User.create(user);
    res.render('create-user',{add : true})
  },

  login(req, res, next) {
    res.render('login');
  },

  async authenticate(req, res, next) {
    let { email, password } = req.body;
    let user = await User.findOne({ where: { email } });

    if(!user){
      return res.render('login', { notFound: true });
    }

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('login', { notFound: true });
    }

    // removendo a propriedade password para nao criar sessao
    // contendo a senha do usuario logado
    delete user.password;

    req.session.user = user;

    res.render('index', { user: req.session.user, cards });
  },

  logout(req, res, next) {
    req.session.destroy();
    res.redirect('/');
  }
}