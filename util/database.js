const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://jmccommas:Monster2018!@cluster0-zdwm7.mongodb.net/test?retryWrites=true"
  )
    .then(client => {
      console.log("Connected!");
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
