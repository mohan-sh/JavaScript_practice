// var a=5;
// function ca(){
//     if(1){
//         console.log(a);
//     }
// }
// ca();
// console.log(a);
//---------------------------------------
// let a = BigInt(442);
// console.log(a);
//-----------------------------------------
// let student= {
//     name:["mohan","hari"],
//     age:20,
//     isStudent:true,
//     address:{
//         state:"tn",
//         pincode : 641666
//     }
// }
// console.log(student.name[0]);
// console.log(student.address.state);
//------------------------------------------------------------
// let student1 = new Object();
// student1.name = "abi";
// student1.name = "manu";
// student1.age = 18;
// student1.hello=function(){
//     console.log("im am mohan");
// }
// student1.kom=()=>{
//     console.log("i am hari")

// }
// console.log(student1);
// student1.hello();
// student1.kom();
// console.log(student1.name);

//---------------------------------------------------------------------
// var n=5;
// if(n%3==0 && n%5==0){
//     console.log("hi hello");
// }else if(n%5==0){
//     console.log("hello");
// }else if(n%3==0){
//     console.log("hi");
// }

// let choice=2;
// switch(choice){
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
        
//     case 3:
//         console.log("3");
        
//     default:
//             console.log("not print");
// }

// let hello=()=>{
//     console.log("mohan");
//     return 3+3;
// }
// console.log(hello());
// function gf(){
//     console.log("hj");
// }
// gf();


// let function1 = (a, b) => {
//     let c=a+b;
//     return c ;

// }

// console.log(function1(5,4));
//------------------------------------------------
// let a= [1,2,3,4];
// let b=a;
// b[2]=10;
// console.log(a);
// console.log(b);
//----------------------------------------
// for(;1;) console.log("hj");
// for(;console.log('a'););
//-------------------------------------------
// let spread = (...v)=>{
//    console.log(v);
// }
// spread(1,2,3,4);

//destructuring
// let a=[1,2,3,4];
// let [b,c,x,...i]=a;
// console.log(i);
//-----------------------------------------------
// function dog(cat){
//     setTimeout(()=>{
//         console.log("dog");
//         cat();
//     },2000);
// }

// function cat(){
//     console.log("cat");
// }
// dog(cat);

// console.log("waiting of timeout");


// let home = new Promise((resolve,reject)=>{      
//     if(false)
//         resolve("promise reached");
//     else 
//         reject("promise reject");

// })
// home.then((response)=>{
//     console.log(response);
    

// })
// home.catch((failed)=>{
//     console.log(failed)
// })
// let cat=()=>{
//     console.log("promised passed");
// }

//---------------------------------
// function attendence() {
//     return new Promise((resolve,reject)=>{
       
    
//     setTimeout(()=>{
//         if(true)
//             resolve("im present");
//         else
//               reject("im absrn")
//     },2000);
// })
    
// }
// async function finalday() {
//     try{
//         let att = await attendence();
//         console.log(att);
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }
// finalday();
// console.log("lkhkj");


async function order() {
    let a1 = await book(); // Await the result of `book`
    console.log(a1);
    console.log("download complete");
  }
  
  function book() {
    console.log("file is selected");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (1) {
          resolve("file got downloaded");
        } else {
          reject("file not downloaded");
        }
      }, 2000);
    });
  }
  
  order();
  