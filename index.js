const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

// connecting mongodb
require("./db/connection");

// routes
app.use(require("./routes/routes"));


app.listen(PORT, () => {
    console.log(`server started running on port ${PORT}`);
})