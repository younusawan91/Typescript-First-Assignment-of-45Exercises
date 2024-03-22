// Define the sandwich_order function
function sandwich_order() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log("No items specified.");
    }
    else {
        console.log("Items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
    console.log("----------------------");
}
// Call the function three times with different number of arguments
sandwich_order('Turkey', 'Lettuce', 'Tomato', 'Mayonnaise');
sandwich_order('Ham', 'Cheese');
sandwich_order(); // No items specified
