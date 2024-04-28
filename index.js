// server.js
const cors=require('cors');
const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// OracleDB connection setup

const dbConfig = {
  user: 'system',
  password: 'manager',
  connectString: 'localhost:/orcl',
};

// Routes
app.get('/api/donors/:id', async (req, res) => {
  const { id } = req.params;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    let query = 'SELECT * FROM donors';
    let bindParams = [];

    if (id) {
      query += ' WHERE id = :id';
      bindParams.push(id);
    }

    const result = await connection.execute(query, bindParams);

    if (result.rows.length === 0) {
      res.status(404).send('Data not found');
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


app.post('/api/donors', async (req, res) => {
  const { id, name, age, phone, bg, ml,gender, ddate } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `INSERT INTO donors (id, name, age, phone, bg,ml,gender, ddate) VALUES (:id, :name, :age, :phone, :bg, :ml, :gender, :ddate)`,
      { id, name, age, phone, bg, ml, gender, ddate },
      { autoCommit: true }
    );

    res.status(201).send('Data added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.put('/api/donors/:id', async (req, res) => {
  const id = req.params.id;
  const { name, age, phone, bg, ml, gender,ddate } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `UPDATE donors SET name = :name, age = :age, phone = :phone, bg = :bg, ml = :ml, gender = :gender, ddate = :ddate WHERE id = :id`,
      { id, name, age, phone, bg, ml,gender, ddate },
      { autoCommit: true }
    );

    res.status(200).send('Data updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.delete('/api/donors/:id', async (req, res) => {
  const id = req.params.id;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(`DELETE FROM donors WHERE id = :id`, [id], { autoCommit: true });

    res.status(200).send('Data deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});