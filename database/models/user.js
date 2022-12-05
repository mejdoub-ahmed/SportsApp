// import the database connection

const connection = require("../index.js");

module.exports = {
  getAll: function (callback) {
    const sql = "SELECT * FROM user";
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  add: function (callback, iduser, mail, username) {
    const sql = `INSERT INTO user (iduser,mail,username) VALUES("${iduser}","${mail}","${username}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  update: function (callback, bio, gender, categorie, imageuser, id) {
    const sql = `UPDATE user SET bio = '${bio}' gender = '${gender}',categorie = '${categorie}',imageuser = '${imageuser}'  WHERE id ="${id}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
