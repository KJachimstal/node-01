// TODO: udokumentuj każdą funkcje

const path = require("path");
const fs = require("fs");

// * Declare file path
const contactsPath = path.normalize("./db/contacts.json");

async function getContacts() {
  return new Promise(function (resolve, reject) {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) reject(err);
      return resolve(JSON.parse(data));
      // console.log(JSON.parse(data));
    });
  }).then((data) => console.log(data));
}

const getContactById = (contactId) => {};

const removeContact = (contactId) => {};

const addContact = (name, email, phone) => {};

module.exports = {
  getContacts,
  getContactById,
  removeContact,
  addContact,
};
