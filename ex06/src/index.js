//Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
}

//Create lion object here
function myFunction(propName, propValue){//Change this line
//Only change code below this line
lion[propName] = propValue 
return lion
//Only change code above this line
}
console.log(myFunction("roar", "roar-roar"));//Change this line
module.exports = myFunction;