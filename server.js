import routes from "./route";

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//API
app.use("/", routes.BOOK);

app.listen(8000, () => {
    console.log(`server running at http://localhost:${8000}`);
});

