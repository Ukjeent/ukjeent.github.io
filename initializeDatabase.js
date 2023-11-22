const { Pool } = require('pg');

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'IJFrcFIqDHS8Bx3LXpfT',
  database: 'portfolio', // Change to your database name
  port: 5432,
});

// Create the projects table
async function createProjectsTable() {
  try {
    const client = await pool.connect();
    
    // Define the SQL query for creating the projects table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        url VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        skills TEXT[] NOT NULL
      );
    `;

    await client.query(createTableQuery);
    console.log('Projects table created successfully.');
    
    client.release();
  } catch (error) {
    console.error('Error creating projects table:', error);
  }
}

// Insert project information into the projects table
async function insertProjectData() {
  try {
    const client = await pool.connect();

    // Define the SQL query for inserting project data
    const insertDataQuery = `
      INSERT INTO projects (name, text, url, image, skills)
      VALUES 
        ('Interactive registration form', 'An interactive registration form for a fictional Full Stack conference with conditional behavior and interactivity. The form validates user input with error messages.', '/interactive-form', 'images/interactive_form.png', '{"JavaScript", "HTML", "CSS"}'),
        ('Employee Directory', 'An employee directory using a third-party API to fetch random employees. Includes features like a modal window and search functionality.', '/employee_directory', 'images/employee_directory.png', '{"JavaScript", "HTML", "CSS", "API"}'),
        ('WebApp Dashboard', 'An interactive dashboard for a web application including SVG graphics, tables, interactive charts and form validation. LocalStorage is used to save changes in the settings section.', '/web_app_dashboard', 'images/dashboard.png', '{"JavaScript", "HTML", "CSS", "SASS"}'),
        ('Phrase Hunter', 'A browser-based, word guessing game. JavaScript and Object-Oriented Programming is used to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard or using the keyboard.', '/oop-game-show-app-fs', 'images/wheel_of_success.png', '{"JavaScript", "OOP", "HTML", "CSS"}'),
        ('Image Gallery', 'An interactive searchable image gallery with lightbox functionality, built with HTML, CSS and JavaScript.', '/photo_gallery_project', 'images/gallery.png', '{"JavaScript", "HTML", "CSS", "SASS"}');
    `;

    await client.query(insertDataQuery);
    console.log('Project data inserted successfully.');

    client.release();
  } catch (error) {
    console.error('Error inserting project data:', error);
  }
}

// Run the functions to create the table and insert data
async function initializeDatabase() {
  await createProjectsTable();
  await insertProjectData();
  await pool.end(); // End the connection pool after all operations are completed
}

// Call the function to initialize the database
initializeDatabase();
