// Define the sandwich_order function
function sandwich_order(...items: string[]): void {
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log("No items specified.");
    } else {
        console.log("Items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("----------------------");
}

// Call the function three times with different number of arguments
sandwich_order('Turkey', 'Lettuce', 'Tomato', 'Mayonnaise');
sandwich_order('Ham', 'Cheese');
sandwich_order(); // No items specified
