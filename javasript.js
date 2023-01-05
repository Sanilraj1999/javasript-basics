// Spread Operators



//  const globalPlayer=["Rahul","Ajay","John"];
//  const globalPlayer2=["Ramu","Raju","Sandra"];


// //  const player1=globalPlayer.concat(globalPlayer2);
//  const player1=[...globalPlayer,"hai"];
// console.log(player1);


//  console.log(globalPlayer);
//  console.log(globalPlayer2);





// Rest



// const globalPlayer = ["Rahul", "Ajay", "John"];

// const [first,second,third]=globalPlayer;

// const globalPlayer={
//     Id:0,
//     name:"Sanil",
//     age:23,
// };

// const {Id , ...rest }=globalPlayer;
// console.log(Id);
// console.log(rest);

// Arrow




// function myFunc(){
//     console.log("Running");
// }
// // myFunc()

// const myFunc=() =>{
//     console.log("Running");
// };
// myFunc()


// ForEach





// const globalPlayer = [
//     {
//         Id: 0,
//         name: "Sanil",
//         age: 23,
//     },


//     {
//         Id: 1,
//         name: "Sherin",
//         age: 22,
//     },

//     {
//         Id: 2,
//         name: "Reshma",
//         age: 24,
//     }
// ];

// for (let i=0;i<globalPlayer.length;i++){
//     console.log(globalPlayer[i]);
// }
// globalPlayer.forEach((value,index,array)=>{
//     console.log(array);
// });




// Map




// const globalPlayer = [
//         {
//             Id: 0,
//             name: "Sanil",
//             age: 23,
//         },
    
    
//         {
//             Id: 1,
//             name: "Sherin",
//             age: 22,
//         },
    
//         {
//             Id: 2,
//             name: "Reshma",
//             age: 24,
//         }
//     ];

// const newArray=globalPlayer.map((value)=>value.name);




//Filter



// const newArray=globalPlayer.filter((value)=>value.age===22&& value.Id===1);

// console.log(newArray);




// Reduce


// const numberArray=[15,10,20,5,50,66,88];

// const newArray=numberArray.reduce((total,value)=>total + value,0 );

// console.log(newArray);





// Find




// const globalPlayer = [
//     {
//         Id: 0,
//         name: "Sanil",
//         age: 23,
//     },


//     {
//         Id: 1,
//         name: "Sherin",
//         age: 22,
//     },

//     {
//         Id: 2,
//         name: "Reshma",
//         age: 24,
//     }
// ];

// const newObj=globalPlayer.find((value)=> value.age===22);
// console.log(newObj);





// Sort



// const numberArray=[15,10,20,5,50,66,88];

// const sortedNumber=numberArray.sort((a,b)=>b-a);

// console.log(numberArray);





// DOM Selectors




// document.querySelector(".header").style.color="red";

// const header=document.querySelectorAll(".header");

// header.forEach((data)=>(data.style.color="red"));

// ES10 Syntax





// const numberArray=[15,10,[20,5],50,[66,[88,[45,53],27],98]];
// console.log(numberArray.flat(Infinity));



// const globalPlayer={
//     id:1,
//     name:"Sanil",
//     age:23,
//     company:{
//         com_name:"Google"
//     },
// };

// // console.log(globalPlayer.company.com_name);


// if(globalPlayer?.company?.com_name){
//     console.log(globalPlayer.company.com_name);
// }



// const numberArray=[15,10,20,5,60,80,90,100,12,14,20];

// const newArray=numberArray
// .map((value)=>value)
// .filter((data)=>data>15)
// .sort((a,b)=>a-b)
// // .reduce((total,value)=>total+value,0);

// console.log(newArray);
