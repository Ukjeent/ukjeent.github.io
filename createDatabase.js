const { Pool } = require("pg");

// PostgreSQL connection configuration for superuser (typically 'postgres' user)
const superuserPool = new Pool({
  user: "postgres", // Change to 'postgres'
  host: "localhost",
  password: "IJFrcFIqDHS8Bx3LXpfT",
  port: 5432,
});

// Create the database
async function createDatabase() {
  try {
    const client = await superuserPool.connect();
    await client.query("CREATE DATABASE portfolio");
    console.log("Database created successfully.");
    client.release();
  } catch (error) {
    console.error("Error creating the database:", error);
  } finally {
    await superuserPool.end();
  }
}

createDatabase();
