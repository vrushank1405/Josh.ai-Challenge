const express = require("express");
const axios = require("axios");
const url =
  "http://192.168.0.17:8080/api/newdeveloper";
const app = express()
var oldData = [];


// use npm axios packge to fetch api through hue-simulator

function getDataFromAPI(apiData) {
  app.get(
    axios
      .get(url)
      .then((response) => {
        const data = response.data.lights;
        for (var key in data) {
          var single = data[key];
          single["id"] = key;

          apiData.push({
            id: single.id,
            name: single.name,
            on: single.state.on,
            bri: single.state.bri,
          });
        }

      })
      .catch(error => {
        console.log(error);
      })
  );
}
// Call getDataFromAPI function 
getDataFromAPI(oldData);

// Hold for the 1 second when getDataFromAPI method call 
setTimeout(function () {
  console.log("---------New Data -----------")
  console.log(oldData);
}, 1000);

//compare two array to check any new update and print in console

setInterval(function () {
  var newData = [];
  getDataFromAPI(newData)

  // check update every three second, is any update occur it print the update and store in oldData

  setTimeout(function () {
    var updatedData = [];

    for (var i in oldData) {
      if (oldData[i].on !== newData[i].on) {
        updatedData.push({
          id: newData[i].id,
          on: newData[i].on
        })
      }
      if (oldData[i].bri !== newData[i].bri) {
        updatedData.push({
          id: newData[i].id,
          bri: newData[i].bri
        })
      }
    }
    if (updatedData.length > 0) {
      console.log("---------Updated Data -----------")
      console.log(updatedData)
    }
    oldData = newData;

  }, 1000);
}, 3000);


// server run on https://localhost:4000

app.listen(process.env.port || 4000, () => {
  console.log('https://localhost:7000');
})
