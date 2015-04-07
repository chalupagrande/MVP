var db = require('../db');

//database connection.

module.exports = {
  ratings: {
    find: function () {

      
      // actual SQL QUERY
    }, // a function which produces all the messages

    // a function which can be used to insert a message into the database
    create: function () {}
    update: function () {}
    destroy: function () {
    }
  },

  users: {
    // Ditto as above.
    find: function () {},
    create: function () {}
    update: function () {}
    destroy: function () {}
  }
};

