//Pure Functions Questions 

//--------------- Map Function ---------------

//1.Write a function that takes an array of numbers and returns a 
// new array with each number squared. Use the Mapobject to accomplish this.

// const numbers = [1, 2, 3, 4, 5];

// function square(num) {
//   return num * num;
// }

//const squaredNumbers = numbers.map(square);

// console.log(numbers.map(square)); // Output: [1, 4, 9, 16, 25]

//2.Write a function that takes an array of objects with a nameproperty and returns a 
// new array of strings with the name of each object capitalized. Use the Mapobject to accomplish this.

// const people = [
//   { name: 'john' },
//   { name: 'jane' },
//   { name: 'jack' },
// ];

// function capitalizeNames(arr) {
//   return arr.map(obj => obj.name.charAt(0).toUpperCase() + obj.name.slice(1));
// }

// const capitalizedNames = capitalizeNames(people);
// console.log(capitalizedNames);  // Output: [ 'John', 'Jane', 'Jack' ]


//3.Write a function that takes an array of words and returns an object where the keys 
//  are the words and the values are the number of times each word appears in the array. 
//  Use the Mapobject to accomplish this.

// const word=['singaram','aravind','muthuram','mohan','rajesh','singaram','muthuram','roshin','singaram' ,'mohan']
// const count={}
// word.map(e=>{count[e]=(count[e]||0)+1});
//   console.log(count)


// 4.Write a function that takes a string and returns an object where the keys are the characters in the 
//   string and the values are the number of times each character appears in the string. 
//   Use the Mapobject to accomplish this.

// function countChars(str) {
//   let charCount = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (char in charCount) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
//   return charCount;
// }
// console.log(countChars("aravindakumar"));


// 5.Write a function that takes an array of objects with a categoryproperty and returns an 
//   object where the keys are the categories, and the values are arrays of objects with that category.
//   Use map function

// employees=[
//   {name:"aravind",role:"developer"},
//   {name:"singaram",role:"cyber"},
//   {name:"mohan",role:"developer"},
//   {name:"muthu",role:"cyber"},
//   {name:"rajesh",role:"developer"},
//   {name:"roshin",role:"finance"},
// ]
// function groupByCategory(employees) {
//   const result = {};
//   employees.map(obj => {
//     const category = obj.role;
//     result[category] = result[category] || [];
//     result[category].push(obj);
//   });
//   return result;
// }
// console.log(groupByCategory(employees))


// 6.Write a function that takes an array of strings and returns a new array with only the unique strings. 
// Use the Mapobject to accomplish this.

// const arr=['aravind','mohan','muthu','selva','aravind','singaram','mohan']
// function findUniqueStrings(arr) {
//   const unique = {};
  
//   for (let i = 0; i < arr.length; i++) {
//     const str = arr[i];
    
//     if (!unique[str]) {
//       unique[str] = true;
//     }
//   }
  
//   return Object.keys(unique);
// }
// console.log(findUniqueStrings(arr))

// Object.keys(unique) is used to retrieve an array of the keys in the unique object.


// 8.Write a function that takes an array of objects with a nameand ageproperty and returns 
//   an object where the keys are the age and the values are arrays of objects with that age.
//   Use the Mapobject to accomplish this.

// arr=[{name:"aravind", age:20},
//      {name:"muthu" ,age:20},
//      {name:"singaram" ,age:24},
//      {name:"rajesh" ,age:24},
//      {name:"roshin", age:22}]

// function mapByAge(arr) {

//   const result = {};
  
//   for (const obj of arr) {
//     const { name, age } = obj;
    
//     if (!result[age]) {
//       result[age] = [];
//     }
    
//     result[age].push({ name, age });
//   }
  
//   return result;
// }
// console.log(mapByAge(arr))


// 9.Write a function that takes an array of strings and returns an object where the keys are 
// the strings sorted alphabetically and the values are arrays of the original strings that are 
// anagrams of each other.Use the Mapobject to accomplish this.

// arr=['cat','tea','mom','act','ate'];
// function groupAnagrams(arr) {
//   const map = {};
  
//   for (const str of arr) {
//     const sortedStr = str.split('').sort().join('');
    
//     if (!map[sortedStr]) {
//       map[sortedStr] = [];
//     }
    
//     map[sortedStr].push(str);
//   }
  
//   return map;
// }
// console.log(groupAnagrams(arr));


// 10.Write a function that takes an array of objects with a dateproperty and returns an object 
//    where the keys are the year and the values are arrays of objects with that year.
//    Use the Mapobject to accomplish this.


// const input = [
//   { date: "2022-01-01", name: "Event 1" },
//   { date: "2022-02-15", name: "Event 2" },
//   { date: "2023-03-30", name: "Event 3" },
//   { date: "2023-04-26", name: "Event 4" },
//   { date: "2022-06-10", name: "Event 5" }
// ];
// function groupByYear(input) {
//   const result = new Map();
  
//   input.map(item => {
//     const year = new Date(item.date).getFullYear();
//     const items = result.get(year) || [];
//     items.push(item);
//     result.set(year, items);
//   });
  
//   return result;
// }
// console.log(groupByYear(input));