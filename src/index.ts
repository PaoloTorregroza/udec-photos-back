import express from "express";
import connect from './utils/ConnectDB';

// tslint:disable-next-line
require("dotenv").config();

const app = express();
const port = 8080 || process.env.PORT;

app.get("/", (_, res) => {
    res.send("Hello World!");
});

const db = process.env.DB_URI

if (db) connect(db);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
