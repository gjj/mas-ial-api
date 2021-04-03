require("dotenv").config();
const serverless = require("serverless-http");
const express = require("express");
const request = require("request");

const app = express();
const API_URL = process.env.API_URL;

const getApiResults = (url) => {
  return new Promise((resolve, reject) => {
    request(url, { json: true }, (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
};

app.get("/ialsearch", function (req, res) {
  const params = new URLSearchParams(req.query).toString();
  getApiResults(`${API_URL}/ialsearch?${params}`)
    .then((data) => res.json(data))
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
  getApiResults(`${API_URL}/ialsuggest?${params}`)
    .then((data) => res.json(data))
    .catch((err) =>
      res.json({
        error: {
          msg: `Unable to connect to MAS IAL API due to ${err}`,
        },
      })
    );
});

module.exports.handler = serverless(app);
