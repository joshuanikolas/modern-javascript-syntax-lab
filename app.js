// ********EXERCISE 1******** 

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const nums2 = nums.map((currentElement) => {
    return currentElement * 2;
});
console.log(nums2);

// ********EXERCISE 2********

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings

console.log(firstTopping);
console.log(secondTopping);


// ********
