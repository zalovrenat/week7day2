//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const parser = some_object => {
    console.log(Object.entries(some_object))
}

parser(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person (name, age){
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(this.name,this.age)
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.hb = () => {
        this.age ++
        console.log(`${this.name}, your new age is ${this.age}. Happy Birthday!`)
    }

}

const p1 = new Person('Renat',30)
const p2 = new Person('Shoha',9000)
p1.printInfo(p1)
p2.printInfo(p2)
p1.hb()
p1.hb()
p1.hb()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if its length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = some_string => {
    let string_len = some_string.length
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if (string_len > 10){
                resolve('Big word')
            }
            else if (string_len < 10){
                resolve('Small Number')
            }
            else {
                reject('The number is neither greater than nor less than 10')
            }
        }, 3000)
    })
}

const checkingString = async () => {
    const data = await checkString('0123456789')
    console.log(data)
}

checkingString()



// =============Exercise #4 ============//

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
    return str.slice(str.length-ending.length) == ending
}



// =============Exercise #5 ============//

// https://www.codewars.com/kata/557e8a141ca1f4caa70000a6/train/javascript

function isTriangleNumber(number) {
    if (Number.isInteger(number)) {
      let adder = 1
      let check = 0
      
      while (check < number) {
        check += adder
        adder ++
      }
      if (number == check) {
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }