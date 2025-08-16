// Import Express
import express from "express";
// Import Cors
import cors from "cors";

// Init App
const app = express();

// Use Cors
app.use(cors());

// Use Express Body Parser
app.use(express.json()); // Parsing application/json
app.use(express.urlencoded({ extended: true })); // Parsing application/x-www-form-urlencoded

// Define Port
const PORT = 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("Boilerplate NodeJS & ExpressJS");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
