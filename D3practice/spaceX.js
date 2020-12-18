// API url
const url = "https://api.spacexdata.com/v2/launchpads";

// Shows all data from the API
d3.json(url).then(receivedData => console.log(receivedData));

// Vandenberg Air Force Base only
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// Vandenberg Latitude    
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));


        