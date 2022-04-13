//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
const express = require('express');
const cors = require('cors');

//////////////////////////////////////////////////////
// INIT
//////////////////////////////////////////////////////
const app = express();
const PORT = process.env.PORT || 3000;

const pool = require('./db'); //Import from db.js

//////////////////////////////////////////////////////
// SETUP APP
//////////////////////////////////////////////////////
app.use(cors());

// REQUIRED TO READ POST>BODY if using "raw" > "JSON"
app.use(express.json());

// REQUIRED TO READ POST>BODY if using "x-www-form-urlencoded"
// If not req.body is empty
app.use(express.urlencoded({ extended: false }));

//////////////////////////////////////////////////////
// POST GET METHODS
// http://localhost:3000/api/
// Use Postman to test
//////////////////////////////////////////////////////
app.get('/api', async (req, res, next) => {
    console.log(req.query);

    res.json(req.query);
});

app.post('/api', async (req, res, next) => {
    console.log(req.body);

    res.json(req.body);
});

//////////////////////////////////////////////////////
// SETUP DB
//////////////////////////////////////////////////////
const CREATE_TABLE_SQL = `
    CREATE TABLE words (
        id SERIAL primary key,
        word VARCHAR not null
    );
`;

app.post('/api/table/words', async (req, res, next) => {
    
    pool.query(CREATE_TABLE_SQL)
    .then(() => {
         res.send(`Table <words> created`);
    })
    .catch((error) => {
        res.send(error);
    });
});

//////////////////////////////////////////////////////
// CLEAR DB
//////////////////////////////////////////////////////
const DROP_TABLE_SQL = `
    DROP TABLE IF EXISTS words;
`;

app.delete('/api/table/words', async (req, res, next) => {
    
    pool.query(DROP_TABLE_SQL)
    .then(() => {
        res.send(`Table <words> dropped`);
    })
    .catch((error) => {
        res.send(error);
    });
});

app.get('/api/word', async (req, res, next) => {
    
    try
    {
        console.log(req.query);

        let sQueryStatement= {
            text: 'SELECT * FROM words'
        }

        if(req.query.id != null)
        {
            sQueryStatement= {
                text: 'SELECT * FROM words WHERE id = $1',
                values: [req.query.id]
            }
        }

        const allMessage = await pool.query(sQueryStatement);

        res.json(allMessage.rows);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

app.post('/api/word', async (req, res, next) => {
    try
    {
        console.log(req.body);
        let word = req.body.word;

        const newInsert = await pool.query("INSERT INTO words (word) VALUES ($1) RETURNING *", [word]);

        res.json(newInsert);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

app.delete('/api/word', async (req, res, next) => {
    try
    {
        console.log(req.body);

        sQueryStatement= {
            text: 'DELETE FROM words WHERE word = $1',
            values: [req.body.word]
        }

        const queryReturn = await pool.query(sQueryStatement);

        res.json(queryReturn);
    }
    catch(err)
    {
        console.error(err.message);
    }
});


//////////////////////////////////////////////////////
// DISPLAY SERVER RUNNING
//////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});