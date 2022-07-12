const express = require("express");
const cors = require("cors");
const db = require("./dbConfig/mongoose");
const PORT = 4000;
const app = express();
app.use(express.json( {extended : false} ));
app.use(express.urlencoded({ extended: false })); //analyser le corps de la requete http
app.use(cors());

app.use("/",  require('./routes/userRoute'));
app.use("/auth", require("./routes/auth"));
app.use("/cours", require("./routes/coursRoute"));

app.listen(
    PORT,
    console.log("Server is running in adresse : http://localhost:" + `${PORT}`)
  ); 
