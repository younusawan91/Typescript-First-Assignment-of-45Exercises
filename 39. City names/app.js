// Define the city_country function
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with at least three city-country pairs
var location1 = city_country('Lahore', 'Pakistan');
var location2 = city_country('Dhaka', 'Bangladesh');
var location3 = city_country('Colombo', 'Sri Lanka');
// Print the values returned by the function
console.log(location1);
console.log(location2);
console.log(location3);
