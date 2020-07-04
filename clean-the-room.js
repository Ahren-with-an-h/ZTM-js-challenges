// Question 1: Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that
// organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function cleanTheRoom(array) {
    // Make a copy to work with
    arr = array.slice();
    // Sort the array
    arr.sort((a, b) => parseInt(a) - parseInt(b));

    // Separate numbers and strings
    let stringArr = arr.filter(item => typeof(item) === 'string');
    let numArr = arr.filter(item => typeof(item) === 'number');
    
    // Group duplicates
    function groupDuplicates(arr) {
        let newArr = [];
        // Get number of duplicates and splice them into the new array
        while (arr.length > 0) {
            let duplicates = arr.lastIndexOf(arr[0]) + 1; 
            // if only one push the value, else push the array of duplicates
            if (duplicates === 1) {
                newArr.push(arr.splice(0, duplicates)[0]);
            } else {
                newArr.push(arr.splice(0, duplicates));
            }
        }
        return newArr;
    }
    stringArr = groupDuplicates(stringArr);
    numArr = groupDuplicates(numArr);  

    return [numArr, stringArr];
}

let input = [1,'3','3',2,4,591,'1',392,'17',391,2,'3',5,10,'3',2,1,1,1,20,20];
console.log(cleanTheRoom(input));
