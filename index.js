const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const projects = require("./data/projects.json");
app.get("/projects", (req, res) => {
  res.send(projects);
});

const aboutTeamMember = require("./data/aboutTeam.json");
app.get("/aboutTeam", (req, res) => {
  res.send(aboutTeamMember);
});

// get id wise data from tours

// app.get("/aboutTeam/:id", (req, res) => {
//   const memberId = req.params.id;
//   const teamMemberData = aboutTeamMember.find(
//     (member) => member.id === memberId
//   );

//   if (teamMemberData) {
//     res.send(teamMemberData);
//   } else {
//     res.status(404).send("Team member not found");
//   }
// });

app.listen(port, () => {
  console.log(`Portfolio server running on port ${port}`);
});
