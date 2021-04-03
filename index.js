require("dotenv").config();
const serverless = require("serverless-http");
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const API_URL = process.env.API_URL;
const app = express();
app.use(cors());

app.get("/ialsearch", function (req, res) {
  const params = new URLSearchParams(req.query).toString();
  fetch(`${API_URL}/ialsearch?${params}`)
    .then((data) => data.json())
    .then((json) => {
      res.json(json);
    })
    .catch((err) =>
      res.json({
        error: {
          msg: `Unable to connect to MAS IAL API due to ${err}`,
        },
      })
    );
});

app.get("/ialsuggest", function (req, res) {
  const params = new URLSearchParams(req.query).toString();
  fetch(`${API_URL}/ialsuggest?${params}`)
    .then((data) => data.json())
    .then((json) => {
      res.json(json);
    })
    .catch((err) =>
      res.json({
        error: {
          msg: `Unable to connect to MAS IAL API due to ${err}`,
        },
      })
    );
});

module.exports.handler = serverless(app);
