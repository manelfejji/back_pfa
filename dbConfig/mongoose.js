const { connect } = require("mongoose");
const config = require("./key");
const DB = "mongodb://localhost:27017/back77";
connect(DB, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("db is connected ");
  }
});