// ! Import depends of declared type in package.json (example: "type": "module")
// import path from "path";
// import fs from "fs";

const {
  getContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// * Checking file can be read and write
// fs.access(contactsPath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
//   console.log("\n> Checking Permission for reading and writing the file");
//   if (err) console.error("No Read access");
//   else console.log("File can be read and write");
// });

getContacts();
