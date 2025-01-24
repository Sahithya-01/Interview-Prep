// The server is configured to run on the following address:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383

const express = require('express')
const app = express()
const PORT = 8383

// Sample data to simulate a database
let data = ['james']

// Middleware to parse JSON payloads in incoming requests
app.use(express.json())

// ENDPOINTS - HTTP METHODS (verbs) AND ROUTES (paths)
// HTTP methods define the type of action (GET, POST, PUT, DELETE), while routes specify the URL patterns to which the server responds.

// Type 1 - Webpage endpoints (These routes send back HTML content. They are commonly accessed by entering a URL in a browser.)

app.get('/', (req, res) => {
  console.log('User accessed the home page.')
  res.send(`
        <body style="background:pink;color: blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is my script')</script>
        `)
})

app.get('/dashboard', (req, res) => {
  console.log('User accessed the dashboard page.')
  res.send(`
        <body>
        <h1>Dashboard</h1>
        <a href="/">Home</a>
        </body>
        `)
})

// Type 2 - API endpoints (These routes handle non-visual data and are typically consumed by client applications.)

// Fetch all data (Read operation)
app.get('/api/data', (req, res) => {
  console.log('GET request to fetch data.')
  res.status(200).send(data)
})

// Add new data (Create operation)
app.post('/api/data', (req, res) => {
  // Adding a new entry (e.g., triggered when a user submits a form or clicks a sign-up button)
  const newEntry = req.body
  console.log('Received new entry:', newEntry)
  data.push(newEntry.name) // Adding the name field to our data array
  res.sendStatus(201) // Respond with 201 Created
})

// Remove the last item from the data array (Delete operation)
app.delete('/api/data', (req, res) => {
  data.pop()
  console.log('Deleted the last element from the data array.')
  res.sendStatus(203) // Respond with 203 Non-Authoritative Information
})

// Start the server and listen on the specified port
app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT}`)
)
