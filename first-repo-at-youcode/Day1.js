//challenge1
{
let firstName = "Rihab";
let age = 20;
let myCity = "Nador";
console.log(firstName);
console.log(age);
console.log(myCity);
}

//challenge2
{
let firstName = "Rihab";
let age = 20;
console.log("My name is " + firstName + " and I am " + age + " years old.");
}

//challenge3
{
let firstColor = "red";
let secondColor = "blue";
let temp = firstColor;
firstColor = secondColor;
secondColor = temp;
console.log(firstColor);
console.log(secondColor);
}

//challenge4
{
let number1 = 8;
let number2 = 5;
let sum = number1 + number2;
console.log(sum);
}

//challenge5
{
let quantity = 3;
let price = 40;
let Total = quantity * price;
console.log("Total: " + Total + " MAD ");
}

//challenge6
{
let minutes = 5;
let seconds = minutes * 60;
console.log("The number of seconds is: " + seconds);
}

//challenge7
{
let score1 = 14;
let score2 = 17;
let score3 = 12;
let average = ( score1 + score2 + score3 )/3;
console.log(average);
}

//challenge8
{
let age = 20;
if (age >= 18) {
    console.log("You are an adult ");
}
else {
    console.log("You are a minor ");
}
}

//challenge9
{
let grade = 14;
if (grade >= 10) {
    console.log("passed");
}
else {
    console.log("failed");
}
}

//challenge10
{
let totalPrice = 600;
if (totalPrice >= 500 ){ 
    let finalPrice = totalPrice-(totalPrice * 0.10);
    console.log("You get a discount " + finalPrice + " MAD");
}
}