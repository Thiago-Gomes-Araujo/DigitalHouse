const cards = require("../data/cards")

module.exports = {
  index(req, res, next) {
    console.log(req.session.user);
    res.render('index', { cards, user:req.session.user});
  }
}