/*
QUESTIONS:
1. #3 => return the spread of the two objects?
2. #5 why some has curly braces and others do not? when to do curly braces?
3. how is #5 supposed to work?
4. talk through 7 more concrete examples i thought new key/val pair for each from parameters
5. #9 is not what i planned what happened to the first index?
6. #10 how does it return it modified?
*/

/*
1. Given the function: 
Refactor it to use the rest operator & an arrow function

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}
*/

const filterOutOdds = (...arguments) => arguments.filter((num) => (num % 2 === 0))
console.log(filterOutOdds(1, 2, 3,4));


/*
2. findMin: 
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/

const findMin = (...arguments) => Math.min(...arguments)
console.log(findMin(1, 4, 12, -3));
console.log(findMin(-1, 1));
console.log(findMin(3, 1));


/*
3. mergeObjects:
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
*/

const mergeObjects = (a, b) => ({ ...a, ...b })
console.log(mergeObjects({ a:1, b:2}, {c:3, d:4}))


/*
4. doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/

const doubleAndReturnArgs = (arr, ...varNum) => ([...arr,...varNum.map((num) =>(num *2))])
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4))


/*
Slice and Dice:
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! Make sure that you are always returning a new array or object and not modifying the existing inputs.
*/


/*
5. removeRandom
Remove a random element in the items array and return a new array without that item. 

function removeRandom(items) {}
*/

const removeRandom = items => {
    let randomElementIdx = Math.floor(Math.random() * items.length);
    console.log("items length " + items.length);
    console.log("random element idx " + randomElementIdx);
    return [...items.slice(0, randomElementIdx), ...items.slice(randomElementIdx + 1)];
}
console.log(removeRandom([1, 2, 3,4]));


/*
6. extend
Return a new array with every item in array1 and array2. 

function extend(array1, array2) {}
*/

const extend = (array1, array2) => {
    console.log("1st array " + array1);
    console.log("2nd array " + array2);
    return [...array1, ...array2];
}
console.log(extend([1, 2],[3,4]));


/*
7. addKeyVal
Return a new object with all the keys and values from obj and a new key/value pair 

function addKeyVal(obj, key, val) {}
*/

const addKeyVal = (obj, key, val) => {
    console.log(...obj);
    console.log(key)
    console.log(val)
    return {
        ...obj,
        [key]:val
    }
}
console.log(addKeyVal([1,2,3,4],"key","title"));
console.log(addKeyVal([1,2,3,4],5,6));

/*
8. removeKey
Return a new object with a key removed. 

function removeKey(obj, key) {}
*/

const removeKey= (obj, key) => {
    ({ [key]: undefined, ...obj } = obj);
    console.log("this is key " + key);
    return obj;
}
console.log(removeKey([1, 2, 3], 2));

/*
9. combine
Combine two objects and return a new object. 

function combine(obj1, obj2) {}
*/

const combine = (obj1, obj2) => {
    console.log(...obj1);
    console.log(...obj2);
    return { ...obj1, ...obj2 }
}

console.log(combine([1, 2, 3], [4, 5, 6]));


/*
10. update
Return a new object with a modified key and value. 

function update(obj, key, val) {}
*/

const update = (obj, key, val) => {
    return {
        ...obj,
        [key]: val
    }
}

console.log(update({0:1,1:2,2:3}, 400,300))