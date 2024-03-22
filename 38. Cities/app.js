// Define the describe_city function with a default parameter
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Hyderabad', 'Pakistan'); // Providing country explicitly
describe_city('Karachi'); // Using the default country (USA)
describe_city('London', 'UK'); // Providing country explicitly
