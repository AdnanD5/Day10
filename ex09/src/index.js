function myFunction(myObj, checkProp){
//Only change code below this line
if (myObj.hasOwnProperty(checkProp)===true){
    return myObj[checkProp];
} else {return "Not found"}
//Only change code above this line
}
module.exports = myFunction;