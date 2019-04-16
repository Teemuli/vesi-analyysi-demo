
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const pgp = require('pg-promise')();

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();


const dbRoute = 'postgres://bfacpgrwovkgzr:6a8e9b5b8c62098fdd4e537f3246b8b7b402ccb2aa324eaaddf6809e41a66d2b@ec2-79-125-2-142.eu-west-1.compute.amazonaws.com:5432/d88cb0454fotvb?ssl=1';
const db = pgp(dbRoute);


// checks if connection with the database is successful

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getData", (req, res) => {
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

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  const { test_id, user_id, exposure_num } = req.body;
  db.none('INSERT INTO test(test_id, user_id, exposure_num) VALUES($1, $2, $3)'
    ,[test_id, user_id, exposure_num]);
  db.any('SELECT * FROM test')
        .then(function (data) {
            console.log('DATA:', data)
            //return res.json({ success: true, data: data});
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            //return res.json({ success: false, error: err });
        });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
