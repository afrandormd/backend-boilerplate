// Import Express
import express from "express";
// Import Cors
import cors from "cors";
// Swagger-UI-Express
import swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";

// Init App
const app = express();
// Define Port
const PORT = 3000;

// Use Cors
app.use(cors());

// Use Express Body Parser
app.use(express.json()); // Parsing application/json
app.use(express.urlencoded({ extended: true })); // Parsing application/x-www-form-urlencoded

// Using Swagger UI-Express
const raw = await readFile("./docs/apidoc.json", "utf-8");
const swaggerDocument = JSON.parse(raw);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Root Route
app.get("/", (req, res) => {
  res.send("Boilerplate NodeJS & ExpressJS");
});

app.get("/api/v1", (req, res) => {
  res.send("Testing NodeJS & ExpressJS");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
  console.log(
    `API Documentation running on: http://localhost:${PORT}/api-docs`,
  );
});
