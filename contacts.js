const path = require("path");
const fs = require("fs");

// * Declare file path
const contactsPath = path.normalize("./db/contacts.json");

// * Get all contacts from file
const getContacts = () => {
  return new Promise(function (resolve, reject) {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) reject(err);
      return resolve(JSON.parse(data));
    });
  }).then((data) => {
    console.table(data);
  });
};

// * Get contact by ID
const getContactById = (contactId) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) reject(err);
      return resolve(JSON.parse(data));
    });
  }).then((data) => {
    const findedContact = data.find((obj) => obj.id === contactId);

    if (findedContact) {
      console.log(findedContact);
    } else {
      console.log("Contact not found!");
    }
  });
};

// * Remove contact by ID
const removeContact = (contactId) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) reject(err);
      return resolve(JSON.parse(data));
    });
  }).then((data) => {
    const findedContactIndex = data.findIndex((obj) => obj.id === contactId);
    if (findedContactIndex !== -1) {
      data.splice(findedContactIndex, 1);
      fs.writeFile(contactsPath, JSON.stringify(data), (err) => {
        if (err) console.log(err);
      });
      console.log("Contact has been deleted!");
      console.table(data);
    } else {
      console.log("Contact not found! Unable to delete!");
    }
  });
};

// * Add new contact to contacts
const addContact = (name, email, phone) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) reject(err);
      return resolve(JSON.parse(data));
    });
  }).then((data) => {
    data.push({
      id: `${data.length + 1}`,
      name,
      email,
      phone,
    });

    fs.writeFile(contactsPath, JSON.stringify(data), (err) => {
      if (err) console.log(err);
    });
    console.log("Contact has been added!");
    console.table(data);
  });
};

module.exports = {
  getContacts,
  getContactById,
  removeContact,
  addContact,
};
