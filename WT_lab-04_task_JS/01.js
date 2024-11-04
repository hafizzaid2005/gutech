//! Task-1
let my_name = "ahsan"
let age = 19
let rollno = 787
let city_res = "karachi"
console.log("Task 1")
console.log(`My name is ${my_name} and age is ${age} , rollno : ${rollno}. City of Residence is ${city_res}`)

//! Task-2
let len = 32;
let wid = 19;
console.log("Task 2");
console.log("perimeter : " + 2 * (len + wid))

//! Task-3
let price_item = 10
let quan_item = 12
console.log("Task 3");
console.log("total cost: " + price_item * quan_item)

//! Task-4
let year = 2038
console.log("Task 4");
let leapyear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
console.log(year + " is leap year? : " + leapyear)

//! Task-5
let user1Age = 19;
console.log("Task 5");
let ageQualify = user1Age > 18 && user1Age < 25;
console.log("ageQualify: " + ageQualify);