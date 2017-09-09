import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

import bodyParser from 'body-parser';
import sendMail from './backend/sendMail';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(bodyParser.json());       // to support JSON-encoded bodies

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity
  console.log("get users");
  res.json([
    {"id": 1, "firstName": "Bob2", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "John", "lastName": "Doe", "email": "john@gmail.com"},
    {"id": 3, "firstName": "Eve", "lastName": "Adams", "email": "eve@gmail.com"}
  ]);
});

app.post('/postContactForm', function(req, res) {
  sendMail(req.body);
  res.json({status: "OK"});
});

import open from 'open';
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Node app is running at localhost:" + port);
    open('http://localhost:'+ port);
  }
});
