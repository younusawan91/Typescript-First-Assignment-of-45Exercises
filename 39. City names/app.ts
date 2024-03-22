// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs
let location1: string = city_country('Lahore', 'Pakistan');
let location2: string = city_country('Dhaka', 'Bangladesh');
let location3: string = city_country('Colombo', 'Sri Lanka');

// Print the values returned by the function
console.log(location1);
console.log(location2);
console.log(location3);
