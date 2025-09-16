  // Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

 const teas = {
     name: "Lemon tea",
     type: "Greem",
     Caffine: "low"

 }

 // Problem: Access and print the name and type properties of the tea object.

 console.log(teas.name);
 console.log(teas["type"]);

 //Problem: Add a new property origin to the tea object.

 teas.origin = "Assam";


 //Problem: Change the caffeine level of the tea object to "Medium".

 teas.Caffine = "Medium"

 //Problem: Remove the type property from the tea object.

 delete teas.type


//Problem: Check if the tea object has a property origin.

console.log ("origin" in teas);

//Problem: Use a for...in loop to print all properties of the tea object.

for (let key in teas){
     console.log(key + ": " + teas [key]);
}



//Problem: Create a nested objects representing different types of teas and their properties.

const myTeas = {
     greenTeas: {
          name: "Green Tea",
          Caffine_level: "low"

     },
     blackTeas: {
          name: "Black Tea",
          Caffine_level: "High"
     }
}

// Problem: Create a copy of the tea object.


