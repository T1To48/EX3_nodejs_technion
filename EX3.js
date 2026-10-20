//שמות מגישים:
// תאופיק זיאד
// מחמוד זובידאת

let numbers = [0, 5, 8, 0, 3, 0, 7, 2, 0]; //NUMBERS ARRAY
let count = 0; //Counter (Moonee) to count the amount of Zeros

//loop that goes over the numbers array and everytime 0 is found it increments the counter
for (let i = 0; i < numbers.length; i++) {
  count += numbers[i] === 0 ? 1 : 0;
}

console.log('כמות האפסים במערך היא: ' + count);
