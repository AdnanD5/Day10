//Only change code below this line
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
}
function myFunction(myObj){
    var vegetableValue = myFood["vegetable"];
    var fruitValue = myFood["fruit"];
    var drinkValue = myFood["water"];
    return myObj
}
//Only change code above this line
console.log(myFunction(myFood)); //Change this line
module.exports = myFunction(myFood);