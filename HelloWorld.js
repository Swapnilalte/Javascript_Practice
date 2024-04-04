
//Array
//let firstName = "Ganesh";
//const lastName = "Alte";
//const fruits = ['Apple',"Banana","Mango",`Kiwi`]

//const Fruitarray = new Array()

//console.log(fruits[1]);
//Removing elements from Array
// console.log("Pop Element:",fruits.pop());
// fruits.shift()
// console.log(fruits);
//fruits.splice()
//
// Push
// Pop
// shift
// unshift
// splice
// slice

//Concat.funtions

//searching in array.
//let searchElement = <varname>.Indexof("SEarch string")

// let varX=5;
// const varY=9;

// console.log("X Varialble is:",varX);
// console.log("Y Varialble is:",varY);

let Fruits = ["Apple","Banana","Pineapple","Grapes","Watermelon","Kiwi"]
console.log("Iniatal Array of Fruits is:",Fruits);

//Adding elements at the end of an array
Fruits.push("PushedFruit")
console.log("Pushfunction added Pushed Fruit:",Fruits);

//Replacing existing Element on 2nd Position on an Array
Fruits[2]="Banana2"
console.log("Added Banana2 at 2nd Position",Fruits);

//Unshift, Shifting all existing entries by 1 position and adding new element at first position
Fruits.unshift("UnshiftNewElement");
console.log("Using Unshift:",Fruits);

//Replacing existing element, Multiple elements can be replaced.
Fruits.splice(2,3,"Element1","Element2","Element3")
console.log("Usign Splice",Fruits);

//Get a subset array for existing array
let SlicedArray = Fruits.slice(2,5);
console.log("Sliced Array:",SlicedArray);

//Accessing elements from a Array
console.log("Acessing 2nd Positioned Element:",Fruits[2]);
console.log("Acessing Third Positioned Element Using At Function:",Fruits.at(3));

//Removing Last Element from an Array
console.log("Current Array is",Fruits);
Fruits.pop();
console.log("Array After Pop function:",Fruits);
Fruits.shift();
console.log("Array After using Shift Function",Fruits);

let newArray1 = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
console.log("New Array is:",newArray1);
//Concatination of new_Array1 anf Fruits.
let concatedArray = newArray1.concat(Fruits);
console.log("Concatinated Array is :",concatedArray);

//Find Index/Position of an element in an array
let foundIndex = newArray1.indexOf("Red")
console.log("Found Index at:",foundIndex);

//Includes
console.log("Check if newArray includes string Violet:",newArray1.includes("Violet"));

//Reverse
concatedArray.reverse();
console.log("Reversed conbimbed Array is :",concatedArray);
//Getting length of an array

//Destructuring of an array
const [Zeroth, First, Second, Third, Forth] = newArray1;
console.log(Zeroth);

//Accessing elements from NEsted Array.
// Spread Operator in Javascript.

// For Loops

//Pattern Printing

let Array1 = ["Blue ", "Green", "Red", "Orange"];
let Array2 = ["Apple","Banana","Mango","Kiwi"];

let combineArray = [Array1,Array2];

console.log("Combined Array is Also Known as Nested Array:",combineArray);
combineArray = [...Array1,...Array2]
console.log("Array After using spread Operator:",combineArray);

for (let i=0;i<5;i++) {
    console.log("Print:",i);
}

for (let i=0;i<10;i++){
    console.log("*");
}
//Nested Loop
for (let i=0; i<10;i++){
    //console.log("Print Value of i:",i);
    for(let j=0;j<5;j++){
        //console.log("Print Value of j:",j);
    }
    
}

//Print Triangle of Star *
for(let i=0;i<1;i++){
    let tobePrinted = "";
    for (j=0;j<=5;j++){
        tobePrinted = tobePrinted + "*"
        console.log(tobePrinted);
    }
}

//Print Rectangle of Star *
for(let i=0;i<5;i++){
    let tobePrinted = "";
    for(let j=0;j<5;j++){
    tobePrinted = tobePrinted+"*"
    }
    console.log(tobePrinted);
}

//Print Inverted Triangle of Star *
for (let i=5;i>0;i--){
    let tobePrinted = ""
    for (let j=i;j>0;j--){
        tobePrinted= tobePrinted + "*"
        
    }
    console.log(tobePrinted);    
}

//Print Inverted Triangle of Star *
let tobePrinted = "*"
let i;
for (i=1;i<=5;i++){    
    console.log(tobePrinted.repeat(i));
}
for (let j=4;j<1;i--){
    console.log(tobePrinted.repeat(j));
}

//Brake

for (let i=0;i<=5;i++){
    console.log(`Value of i is :${i}`);
    if (i==3){
        break;
    }
    
}
//continue (If we want to *skip* any value of i when condition is met,).

for (let i=0;i<=5;i++){    
    if (i==4){
        console.log(`Skipping Value of i==4`);        
        continue;           
    }
    console.log(`Value of i:${i}`);
}

//Javascript Object, Key Value Pairs.
//Definning Javascript Object
const Car = {
    make: "BMW",
    model: "X1",
    color: "White"
}

// Accessing elements from Javascript Object
//OnjectName.Property Key
console.log(Car.make);
console.log(Car["model"]);

//Functions Javascript.

function Addition (num1,num2){
 let result = num1+num2
 return result
}
let output = Addition(34,56);
console.log(output);

//Sum of Array using for loop.
let arrayToSum = [23,25,635,674,964,345,353]
let sum=0;

for (let i=0;i<arrayToSum.length;i++){

    sum=sum+arrayToSum[i];
    console.log(`${sum}`);        
}
console.log(`Summation of all numbers is: ${sum}`);

//Find Largest Number
function largestNumber(array){
let largest = 0;
for (let i=0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
return largest
}
let array = [3, 6, 203, 56, 32, 5, 89, 32];
NumberToPrint = largestNumber(array)
console.log(`Largest number from the provided array is :${NumberToPrint}`);

//Check Prime Number:

function isPrime(num){    
        if (num <=1){
            return false
        }
        for (let j=2;j<num;j++){
            if (num%j===0){
                return false
            }
        }
    
    return true
}

let output1=isPrime(1423)
console.log(`${output1}`);

//Palindrome String
function isPalindrom(Str){
let SplitStr= Str.split("")
//console.log(`${SplitStr}`);
let reversedStr = SplitStr.reverse()
//console.log(`${reversedStr}`);
let joinedReversedStr = reversedStr.join("");
//console.log(joinedReversedStr);
if(joinedReversedStr==Str){
    return true;
}
else{
    return false;
}
}

let output3 = isPalindrom("121");
console.log(`${output3}`);

//Sperate VOWELS and Consonents

function GetVowelsCount(Str){
let vowels=["A","E","I","O","U"]
let Case=Str.toUpperCase()
let splitCase=Case.split("")
let Vowelscounter=""
let Consonantscounter=""
for (let i=0;i<splitCase.length;i++){
   if(vowels.includes(splitCase[i])){
    //console.log(`Vowels are:${splitCase[i]}`);
    Vowelscounter=Vowelscounter+splitCase[i]       
   }
   else{
    //console.log(`Consonents are:${splitCase[i]}`);
    Consonantscounter=Consonantscounter+splitCase[i]    
   }
}
let j=Vowelscounter.length
let k=Consonantscounter.length
return[j,k]
}

let output4=GetVowelsCount("Vowels");
console.log(`Count of vowels in given String is :${output4[0]},And Count of Consonants is:${output4[1]}`);

//Factorial Calculation
function GetFactorial(num){
let Factorial=1;
for (i=1;i<=num;i++){
    Factorial=Factorial*i;
}
return Factorial;
}

let output5 = GetFactorial(6);
console.log(`factorial: ${output5}`);

//Find Maximum Occuring Character

let Str = "Stringt";
let CapsStr = Str.toUpperCase();
SplitStr = CapsStr.split("");
let Counter=0;
console.log(SplitStr);
for (i=0;i<=CapsStr.length;i++){

    for (j=0;j<=CapsStr.length;j++){
        
        if(CapsStr[i]==CapsStr[j+1]){
            Counter = Counter+1
        }
    }
}
console.log(`${Counter}`);

    















