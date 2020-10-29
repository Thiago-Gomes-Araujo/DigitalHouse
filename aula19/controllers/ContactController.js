const  {cards}  = require("../data/cards");
const contacts  = require("../data/contacts")
const fs = require('fs');
const path = require('path');


module.exports = {
  list(req, res, next) {
    res.render('contacts', { contacts });
  },

  create(req, res, next) {
    let id = contacts.length + 1
    let contact = { id, ...req.body }
    contacts.push(contact);


    const contactsJson = JSON.stringify(contacts);
    const filePath = path.join("data", "contacts.js");

    fs.writeFileSync(filePath, "module.exports = ");
    fs.appendFileSync(filePath, contactsJson);
    res.render('index', { cards, added: true });
  }, 

  edit(req, res, next) {
    let id = req.params.id;
    let contact = contacts.find(contato => id == contato.id);

    res.render('edit-contact', { contact });
  },

  update(req, res, next) {
    let id = req.params.id;
    let { nome, email, mensagem } = req.body;
    let contact = contacts.find(contact => contact.id == id);

    contact.name = nome
    contact.email = email
    contact.message = mensagem

    res.render('edit-contact', { contact, updated: true })
  },

  delete(req, res, next) {
    let id = req.params.id;
    contacts.splice(id - 1, 1);

    res.render('contacts', { contacts, deleted: true });
  },
}



