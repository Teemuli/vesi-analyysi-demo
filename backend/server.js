
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const pgp = require('pg-promise')();
const path = require('path');

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
//const router = express.Router();
app.use(express.static(path.join(__dirname, '../client/build')));

const dbRoute = 'postgres://bfacpgrwovkgzr:6a8e9b5b8c62098fdd4e537f3246b8b7b402ccb2aa324eaaddf6809e41a66d2b@ec2-79-125-2-142.eu-west-1.compute.amazonaws.com:5432/d88cb0454fotvb?ssl=1';
const db = pgp(dbRoute);


// checks if connection with the database is successful

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/api/getData", (req, res) => {
  db.any('SELECT * FROM test')
        .then(function (data) {
            console.log('DATA:', data)
            return res.json({ success: true, data: data});
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            return res.json({ success: false, error: err });
        });
});

// this is our create method
// this method adds new data in our database
app.post("/api/putData", (req, res) => {
  const data = req.body;
  var i;
  for(i=1;i<data.length-1;i++)
  {
    db.none('INSERT INTO test(test_id, user_id, exposure_num, latitude, longitude, result_uranium, result_copper, result_zinc, result_lead, result_nickel, result_manganese, time_stamp) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
   ,[data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5], data[i][6], data[i][7], data[i][8], data[i][9], data[i][10], data[i][11], data[i][12]]);
  }
});

// append /api for our http requests
//app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
