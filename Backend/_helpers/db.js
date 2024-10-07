const config = require('../config.json');
console.log(config.connectionString);
// const mongoose = require('mongoose');
// const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
// mongoose.connect(config.connectionString, connectionOptions);

// mongoose.Promise = global.Promise;
// module.exports = {
//     User: require('../users/user.modal'),
// };