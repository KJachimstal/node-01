// ! Import depends of declared type in package.json (example: "type": "module")
// import path from "path";
// import fs from "fs";

const {
  getContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

getContacts();

// getContactById("C9sjBfCo4UJCWjzBnOtxl");

// removeContact("C9sjBfCo4UJCWjzBnOtxl");

// addContact("Jan Kowalski", "kowal@kowal.pl", "657-032-312");
