const mongoose = require("mongoose");
const URI = `mongodb+srv://rohit:testdb@cluster0.9jdml.mongodb.net/testdb?retryWrites=true&w=majority`;

mongoose
  .connect(URI, {
    authSource: "admin",
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection success with mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
