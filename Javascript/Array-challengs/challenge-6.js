/*
You have a list of food items, but you want to keep only the healthy ones. Remove all items that contain "Burger".

Problem statement: Create a function that removes unhealthy food items (those containing "Burger") and returns the updated list.

Hint 1
Use a method that allows you to filter an array.
*/

// You just need to implement the filterHealthy function
function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    return foodList.filter(food => !food.includes("Burger"));
}

console.log(filterHealthy(["Salad", "Burger", "Apple", "Banana", "Pizza"])); // ["Salad", "Apple", "Banana"]