var map = L.map("map").setView([51.505, -0.09], 8);

// var marker = L.marker([0, 0]).addTo(map);  // set marker

mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; " + mapLink + " Contributors",
  maxZoom: 18,
}).addTo(map);
// const attribution = "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors";

// const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
// const tiles = L.tileLayer(tileUrl, {attribution});
//tiles.addTo(map);

//const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

/*
async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();

    const {latitude, longitude} = data; //javascript object destructuring

    //console.log(latitude + "\n"+longitude);


    marker.setLatLng([latitude, longitude]);

    // display it on the webpage
    // document.getElementById("lat").innerText = latitude;
    // document.getElementById("lon").innerText = longitude;
    
    //setTimeout(getISS(), 6000); // recursive call every x seconds
}
*/

//setInterval(getISS(), 2000);

//var intervalId = window.setInterval(getISS(), 5000);

//fetch json data
// (async () =>{
//     const Cars = await fetch("vehicles-location.json");
//     displayVehicles(Cars.json());
// })();

fetch("vehicles-location.json")
  .then((response) => {
    return response.json();
  })
  .then((obj) => {
    displayVehicles(obj);
  });

function displayVehicles(Cars) {
  //console.log(Cars);

  var pos = [];

  for (let i = 0; i < Cars.length / 10; i++) {
    pos = [Cars[i].location.lat, Cars[i].location.lng];
    L.marker(pos).addTo(map);

    //console.log(pos);
  }
}


var popup = L.popup()
    .setLatLng([10, 10])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);