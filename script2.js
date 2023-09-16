function inchToFeet(inch){
  var result = inch/12;
  console.log(result)
  return result;
}


inchToFeet(84)

function milesToKilo(miles){
    var kilo = miles*1.60934;
    console.log(kilo)
    return kilo;
}

milesToKilo(2)


function isEven(numbr){
if(numbr%2==0){
    return true;
}else{
    return false; 
}
}

console.log(isEven(117))

function lepYear(year){
    var sum = year % 4;
    var math = sum;
    if(math==0){
        console.log("this year is leapyear")
    }else{
        console.log("not a leapyear")
    }

}


lepYear(2011)
function getSomeOfAnArray(numbers){
    var sum = 0;
for(let i = 0; i<numbers.length; i++){
var index = i;
var element = numbers[index]
var result = sum + element;
console.log(index,element);

}
}

var numbers = [1,1,2,2]
getSomeOfAnArray(numbers)

function getSomeOfAnArray(numbers){
    let sum = 0;
   for(let i = 0; i < numbers.length; i++){
    let index = i;
    let element = numbers[index];
    sum = sum + element;
    console.log(index,element,sum)
    
   }
   return sum;
}

let numbers1 = [1,2,1,2]
getSomeOfAnArray(numbers1)

function getOddNumberOfAnArray(numbers){
    let oddnmbrs = []
    for(let i = 0; i<numbers.length; i++){
        let elements = numbers[i];
     if(elements%2==1){
        console.log(elements)
        oddnmbrs.push(elements)
        console.log(oddnmbrs)
      
     }
 
    }
   return oddnmbrs; 
}



// function getOddNumber(numbers){
//     const oddnmbrs = []
//   for(let i = 0; i<numbers.length; i++)
//   let index = i;
//   const element = numbers[index];
//      if(numbers%2==1){
//         console.log(element)
//      }   
// }
// let arr = [1,2,3,4,5,6];
// getOddNumber(arr)
let pakhi = "Pain"
let lower = pakhi.toLowerCase()
let lyrics = 'There is no gain without pain';
let doesExist = lyrics.toLowerCase()
let ache = doesExist.includes(pakhi)
console.log(ache)

var first = 5;
var second = 7;
[first,second] = [second,first]
const temp = first;
first  = second;
second = temp;
console.log(first,second)


var third = 2;
var fourth = 3;
const temp2= third;
third = fourth;
fourth = temp2;
console.log(third,fourth)


const jim = 84;
const dela = 75;
const chinku = 77;
var pabe = Math.max(jim,dela,chinku);

console.log(pabe)

function getHeight(num1,num2,num3){
    var boro = Math.min(num1,num2,num3)
    console.log(boro)
return boro;
}
getHeight(30,20,40)
function MaxInArray(numbers){
    let largest = numbers[0]
    for( var i = 0; i<numbers.length;i++){
        const index = i;
        const element = numbers[index]
        
        if(element>largest){
            largest = element;
        }
    }
return largest;

}

const heights = [ 167,190,120,165,137]
const tallest = MaxInArray(heights);
console.log(tallest)

var names = ['abul','babul','cabul','mabul','abul','abul']
function removeDuplicate(names){
    const newNames = [];
 for(let i = 0; i< names.length; i++){
    const element = names[i];
    console.log(element);
    if(newNames.includes(names) === false){
        newNames.push(names)
    }
 }
return newNames;
}

const unicNames = removeDuplicate(names)

for(var i = 1; i<=50; i++){
    console.log(i)
 if(i%3==0 && i%5==0){
    console.log('foobar');
 }else if(i%3==0){
    console.log("foo")
 }else if(i%5==0){
 console.log('bar')
 }else{
    console.log(i)
 }
}
 


function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
     const perChairWood = 3*chairQuantity;
     const perTableWood = 10*tableQuantity;
     const perbedWood= 50*bedQuantity;
   const totalWood = perChairWood+perTableWood+perbedWood;
     console.log(perChairWood,perTableWood,perbedWood)
     console.log(totalWood)
     return totalWood;
}
woodCalculator(1,1,1)

const phones = [
    { names: 'samsung',camera:12, storage : '32gb', price:20000 },
    { names: 'walton',camera:12, storage : '32gb', price: 300000},
    { names: 'nokiya',camera:12, storage : '32gb', price: 52222},
    { names: 'shaomi',camera:12, storage : '32gb', price:40000 },
];

function cheapestPhone(phones){
        for(let i = 0; i < phones.length; i++){
            const element = phones[i];
            console.log(element)
        }            
}


const mySelection = cheapestPhone(phones); 
const shoppingCart =[
 { name: 'shoe', price: 1200, quantity:4},
 {name : 'shirt', price: 2200, quantity:4},
 { name: 'pant', peice : 3700, quantity:4},
 { name: 'belt', price: 700, quantity:4},
 {name : 'pen', price: 2200, quantity:4},
 { name: 'mouse', peice : 3300, quantity:4},

]

function totalCost(products){
    let sum = 0;
for(let i = 0; i<products.length; i++){
    const product = products[i] 
    const productTotal = product.price * product.quantity
    sum= sum+productTotal;
}
return sum;

}

const result = totalCost(shoppingCart)
console.log(result)


var array = [1,2,1,3]
var arr2 = [1,2,3,4,5,6,7]
function addOdd(array){
   let sum = 0;
   for(let element of array ){
    if(element%2===1){
    sum = sum + element
    console.log(sum)
}
}
return sum;
}

addOdd(arr2)
function add(array){
    let sum = 0;
    for(let i = 0 ; i<array.length; i++){

        sum = sum + array[i] 
        console.log(sum)
    }
return sum;

}

add(arr)

let myInfo={
    name:'Mahi',
    age:19,
    class : 12
}

function makeSentence(senten){
    let sentence = " i am " + senten.name + " my age is " + senten.age + ' i read in class ' + senten.class ;
    console.log(sentence)

}

makeSentence(myInfo)






















