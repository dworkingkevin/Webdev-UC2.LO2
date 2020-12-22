//var myVar = 10
// myvar += 10
//myvar++

/*document.write(20 * 5)
console.log(20 / 5)*/

/*Boolean
var iLikeMeat = true
iLikeMeat = false

Boolean("hello")
true
Boolean(7 > 5)
true
*/

//if statement
var myNum =  10;

if (myNum == 9){

document.write("this is correct");

} else{

document.write("this is incorrect");
};

//else if statement

var myAge = 32;

if (myAge > 30){

  document.write("you are over 30!");

} else if (myAge > 20){

  document.write("you are over 20!");

} else if (myAge > 10){

  document.write("you are over 10!");

} else{

  document.write("you are not over 10!");

};

/*comparison operators

var x = "5"
x = 5
true
x === 5
false */

//Logical operations

var myAge = 17;

if (myAge >= 18 && myAge <= 30){

	document.write("You can come, you awesome guy");

} else{

	document.write("Better luck next time!");

}

var myAge = 25;

if (myAge < 18 || myAge > 30){

	document.write("Better luck next time!");

} else{

	document.write("You can come, you awesome guy");

}

//while loops

var age = 5;

while (age < 10) {

	console.log("Your age is less than 10");
age++;

}

document.write("you are now over 10");

//for loops

var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++)

{
console.log("this is a link number" + i);
}

document.write("all links are now looped");

