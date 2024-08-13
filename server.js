const express = require("express");
const cors = require("cors");
// it is used to load the env variables from .env file to process.env
const dotenv = require("dotenv");
const path = require("path");
// dotenv configuration -- this should be written immediately after import statements to ensure that all variables are available to the complete app
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

// routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const PORT = process.env.PORT || 8080;

// listening
app.listen(PORT, () => {
  console.log(process.env.API_BREVO);
  console.log(`server running on ${PORT}`);
});
