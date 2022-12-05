// import the database connection

const connection = require("../index");

module.exports = {
  getAll: function (callback) {
    const sql = "select * from post";
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  getOne: function (callback, categorie) {
    const sql = `SELECT * FROM post WHERE categorie="${categorie}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  add: function (
    callback,
    postedat,
    posttitle,
    postcontent,
    postimage,
    categorie,
    user_iduser,
    like
  ) {
    const sql = `INSERT INTO post (postedat,posttitle,postcontent,postimage,categorie,user_iduser ) VALUES("${postedat}","${posttitle}", "${postcontent}","${postimage}","${categorie}","${user_iduser}" )`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  del: function (callback, idpost) {
    const sql = `DELETE FROM post WHERE idpost="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putpost: function (
    callback,
    posttitle,
    postcontent,
    postimage,
    categorie,
    idpost
  ) {
    const sql = `UPDATE post SET posttitle ="${posttitle}", postcontent ="${postcontent}" ,postimage="${postimage}", categorie="${categorie}"  WHERE idpost ="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putlike: function (callback, likes, idpost) {
    const sql = `UPDATE post SET likes = '${likes}' WHERE idpost ="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
