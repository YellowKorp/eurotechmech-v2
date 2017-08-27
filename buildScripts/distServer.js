/**
 * Created by taha on 8/27/17.
 */
let express =  require('express');
let cors = require('cors');
const path = require('path');
let compression = require('compression');

/* eslint-disable no-console */

const app = express();
app.use(cors());

app.use(compression());
app.use(express.static('dist'));
app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

// When deploying on production
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

// While testing locally uncomment
// let open = require('open');
// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     open('http://localhost:'+ port);
//   }
// });
