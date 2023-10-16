const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// add midleware
app.use(cors());
const aboutTeamMember = require("./data/aboutTeam.json");

// ...

app.get("/aboutTeam/:id", (req, res) => {
  const memberId = req.params.id;
  const teamMemberData = aboutTeamMember.find(
    (member) => member.name === memberId
  );

  if (teamMemberData) {
    res.send(teamMemberData);
  } else {
    res.status(404).send("Team member not found");
  }
});

// ...

app.listen(port, () => {
  console.log(`Portfolio server running on port ${port} `);
});
