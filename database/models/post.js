// import the database connection

const connection = require("../index");

module.exports = {
  getAll: function (callback) {
    const sql = "select * from post";
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  //a function that retrieves one post record based on the provided id.
  getOne: function (callback, categorie) {
    const sql = `SELECT * FROM post WHERE categorie="${categorie}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  // a function that can be used to insert a post into the database
  add: function (
    callback,
    posttitle,
    postcontent,
    postimage,
    categorie,
    user_iduser,
    like
  ) {
    const sql = `INSERT INTO post (title,content,imageURL,Categories,userid,like ) VALUES("${postedat}","${posttitle}", "${postcontent}","${postimage}","${categorie}","${user_iduser}",${like} )`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  del: function (callback, id) {
    const sql = ` DELETE FROM post WHERE id=${id}`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putpost: function (callback, posttitle, postcontent, id) {
    const sql = `UPDATE post SET posttitle = '${posttitle}', postcontent = '${postcontent}'  WHERE id ="${id}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putlike: function (callback, likes, id) {
    const sql = `UPDATE post SET likes = '${likes}' WHERE id ="${id}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
