// make a polyfill of for each

if (!Array.prototype.forEach){
     Array.prototype.forEach = function (userFn) {
          const originalArr = this;

          for (let i = 0; i < originalArr.length; i++){
               userFn(originalArr[i], i);

          }
     };

}

// polyFill of Map function
// signature  .map
// Return? - New Array, Each ele Iterate, UserFn

if(!Array.prototype.myMap){
     Array.prototype.myMap = function(userFn) {
          const result = [];

          for (let i = 0; i < this.length; i++){
               const value = userFn(this [i], i);
               result.push(value);
          }

          return result;
     }
}


// Filter
// Signature: .filter() | Return - new array | input :  userFn
// agar user function true return karta hai to current value ko new array mai

if (!Array.prototype.myFilter){
     Array.prototype.myFilter = function (userFn) {
          const result = [];

          for (let i = 0; i < this.length; i++){
               if (userFn(this[i])) {
                    result.push(this[i]);
               }
          }


          return result;
     };
}


// Array Include() 
// signature :  .include()
// Return ? -  boolean value | iterate each element of array | input: userFn

if (!Array.prototype.myInclude) { 
     Array.prototype.myInclude = function (userFn) {
          for(let i = 0; i < this.length; i++) {
               if (this[i] === userFn) {
                    return true;
               }
          }
          return false;
     };

}






 const arr = [1, 2, 3, 4, 5, 6]; 

 // forEach loop funtion

 const ret = arr.forEach(function (value, index){
     console.log(`My For Each value at index ${index} is ${value}`);
 });

console.log(`Ret is`, ret);


// for map function
const n = arr.map((e, index) => e*2);
const n2 = arr.myMap((e) => e * 3);

console.log(arr);
console.log(n);
console.log(n2);

// Filter
// Signature: Return - new array | input :  userFn
// agar user function true return karta hai to current value ko new array mai

const n3 = arr.myFilter((e) => e % 2 == 0);
console.log(n3);

//  Array Include() 

const n4 = arr.includes(7);
const n5 = arr.myInclude(5);
console.log(n4);
console.log(n5);



