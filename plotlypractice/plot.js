console.log(cityGrowths);

// Sorting the cities in desc order of pop growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities)

// Selecting only the top five by pop growth
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities)

// Creating arrays of City Names and Growth Figures
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths)

// Bar chart time
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


//   console.log(cityGrowths);

// // Sorting the cities in desc order of pop growth
// var sortedCities = cityGrowths.sort((a,b) =>
// a.Increase_from_2016 - b.Increase_from_2016).reverse();
// console.log(sortedCities)

// // Selecting only the top seven by pop growth
// var topSevenCities = sortedCities.slice(0,7);
// console.log(topSevenCities)

// // Creating arrays of City Names and Growth Figures
// var topSevenCityNames = topSevenCities.map(city => city.City);
// var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));
// console.log(topSevenCityGrowths)

// // Bar chart time
// var trace = {
//     x: topSevenCityNames,
//     y: topSevenCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);