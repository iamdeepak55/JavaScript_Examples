// Array in Javascript

let arr1 = ["HTML", "CSS", "JS"];
console.log(arr1[1]) // Access Single Element

arr1[2] = "JQuery"
console.log(arr1) //Replace an element

let arr2 = new Array("Node", "Angular", "Mongo", "Express");

console.log(arr2) // Access All Elements

console.log(typeof (arr2)) // Array stores as object

console.log(arr2.length); // Find the length

//First Element of Array
console.log(arr2[0]);

//Last Element of Array
console.log(arr2[arr2.length - 1]);

// Add an element at end
arr2.push("React");
console.log(arr2)

// Delete an element at end
arr2.pop()
console.log(arr2)

// Delete an element at begining
arr2.shift()
console.log(arr2)

// Add an element at begining
arr2.unshift("React-Native")
console.log(arr2)

// Reomeve an element from a specific position
arr2.splice(1, 1); //(pos,n) pos is the position and n is the no. of elements to be removed
console.log(arr2);

//copy Array
let arr3 = arr2.slice();
console.log(arr3)

//Reverse of an Array
arr3.reverse();
console.log(arr3);

//sort an Array
console.log(arr3.sort());

// concate an Array
let arr4 = arr2.concat(arr3)
console.log(arr4)
