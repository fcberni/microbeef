var numbers = [1,2,3,4,5];
var plusFive = numbers.map(function(num){
    return num + 5;
});
console.log(plusFive);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(population){
    return population.population;
});
console.log(cityPop);



var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// var sWords = words.filter(function(num){
//     return num > 1;
// });

var sWords = words.filter(word.startsWith("S"));

);

console.log(sWords);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );

