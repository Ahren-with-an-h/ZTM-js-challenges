// Question 2: Write a javascript function that takes an array of numbers
// and a target number. The function should find two different numbers in
// the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]

const findTargetSum = ((arr, target) => {
    for (let i=0; i < arr.length - 1; i++) {
        // for every number in arr check to see if sum with any other number is the target
        for (let j=i; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [ arr[i], arr[j] ];
            }
        }
    }
    return 'No solution'
});

console.log(findTargetSum([1,2,3,4,5], 9));
