const express = require('express');
const app = express();
const port = 3000;

const { Pool } = require('pg');

//Dell
// const pool = new Pool({
// user: 'postgres',
// host: 'localhost',
// database: 'testdb',
// password: '+CtuiD=V{X{qg#h{I]b&',
// port: 5432, // Default PostgreSQL port
// });

//Acer
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'portfolio',
  password: 'IJFrcFIqDHS8Bx3LXpfT',
  port: 5432, // Default PostgreSQL port
});

app.get('/', async (req, res, next) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM projects');
    const projects = result.rows;
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    console.error('Error stack:', error.stack);
    next(error); // Pass the error to the error handling middleware
  } finally {
    client.release(); // Release the client back to the pool
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);
  res.status(err.status || 500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
