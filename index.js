const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// add midleware
app.use(cors());
// GET Req
const projects = require("./data/projects.json");
app.get("/projects", (req, res) => {
  res.send(projects);
});

// GET Req
const aboutTeamMember = require("./data/aboutTeam.json");
app.get("/aboutTeam", (req, res) => {
  res.send(aboutTeamMember);
});

app.listen(port, () => {
  console.log(`Portfolio server running on port ${port} `);
});
