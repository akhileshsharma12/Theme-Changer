// function one() {
//     const userName = "Akhilesh";
//     function two() {
//         const webSite = "Youtube";
//         console.log(userName);
//     }
//     //console.log(webSite);

//     two();
// }
// //one();

// if(true) {
//     const username = "Akhilesh";
//     if(username === "Akhilesh") {
//         const website = "Youtube";
//         console.log(username + " " + website)
//     }
//     //console.log(website)
// }
// //console.log(username);

// // const addOne = function (num) {
// //     return num + 2;
// // }

// //console.log(addOne(10));

// function addTwo (num) {
//     return num - 2;
// }
// console.log(addTwo(10))

// const addOne = (num1 , num2) => {
//     let a = num1;
//     let b = num2;
//     console.log(a + b);
// }

// addOne(10,20);

// const user = {
//     username: "Akhilesh",
//     prise: 999,
//     welcomeMessage: function () {
//         console.log(`${this.username}, Welcome to Website`);
//     }
// }


// function user (name) {
//     this.name = name;
//     this.age = 22;

//     this.msg = function () {
//         console.log(`${this.name}, welcomming you and my age is ${this.age}`);
//     }
// }


function User (name) {
    this.name = name;
    
    this.msg = function () {
        console.log(`${name}, Welcome to our website`);
    }
}

let message = new User("")
message.msg()


