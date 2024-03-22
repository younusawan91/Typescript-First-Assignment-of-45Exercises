// Define the describe_city function with a default parameter
function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Hyderabad', 'Pakistan'); // Providing country explicitly
describe_city('Karachi'); // Using the default country (USA)
describe_city('London', 'UK'); // Providing country explicitly
