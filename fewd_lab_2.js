//4.Write a function called ​myAlphabetLength​ which console.logs the​ length​ of thearray.
(function myAlphabetLength(){
    console.log(['A','B','C','D','E','F','G'].length);
})();

//5.Declare and initialize an array called ​'Planets'​ with​ 5 string values.
let Planets = ['val1','val2','val3','val4','val5'];

//6.Console.log ​each item​ using index in the array of ​Planets​.
Planets.forEach((currentValue, index)=>{
    console.log(Planets[index]);
});

//7.Declare and initialize an array called ​wowDatatypes​ which has 3 different datatypes (NOT OBJECTS) and ​console.log​ the values
let wowDatatypes= [3,true,"no"];
//log
wowDatatypes.forEach((currentValue, index)=>{
    console.log(currentValue);
});

//11Declare a variable hello. Assign a function to it returning 'Hello world!'
let hello= function(){
    return "hello world";
}

//12console.log the hello function
console.log(hello());