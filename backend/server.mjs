
// Setup express
import express from 'express'
const app = express();
import fetch from 'node-fetch'

// Make an endpoint that we can request
app.get("/menu", (req, res) => {

  // Make a request to Gloria Food
  fetch("https://pos.globalfoodsoft.com/pos/menu", {
    headers: {
      Accept: "application/json",
      Authorization: "ee47vuWlbC5mk4QMvp",
      "Glf-Api-Version": "2"
    }
}).then(async (data) => {
    const response = await data.json();
    res.json(response);
  })
})

app.listen(3001);