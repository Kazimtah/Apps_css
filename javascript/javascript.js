//  let x = 5;
//  if (x%2==0){
//     console.log('Even');
//  }else {
//     console.log('Odd');
//  }

//  let y=2, z=3, t=4, h=0;
//  y-=2;
//  h += y*z -t**2;
//  console.log(h);


// if (x<0){
//     console.log("Invalid");
// } else if (x < 10 ){
//     console.log('Fail');
// } else if (x<12){
//     console.log('Conditional');
// } else if(x<=20){
//     console.log('Pass');
// }else {
//     console.log('Invalid Input');
// }

// x = 22;
// if (20<x<0){
//     console.log(`${x} You entered the invalid number which is`);
// } else if (x<10){
//     console.log(`${x} is Failed`);
// }else if(x<12) {
//     console.log(`${x} is Conditional`);
// } else if(x<=20) {
//     console.log('Passed')
// }

// let x = 2;
// console.log(x--);
// console.log(x)

// let x =2;
// let y = 3;
// let z =1;

// console.log(++x-y*((z++)+2)-(z+x));

// let x =0;
// while (x<100){
//     console.log('Hello');
//     x++;
// }

// let x =1 ;
// while (x<10){
//     console.log(x);
//     x++;
// }

// var smsSedningLimits=30;
// var hasPermission=true;
// var username='kazim';
// var nothing;

// console.log("smsSendingLimits is a" + typeof smsSedningLimits);
// console.log("hasPermission is a " + typeof hasPermission);
// console.log("usrname is a " + typeof username);
// console.log('Nothing is a ' + typeof nothing);

// const messageText = "Wellcome to Textio";
// let isBirtday = true;

// if (isBirtday){
//     let messageText = "Happy Birthday";
//     console.log('Sending birthday message....');
//     console.log("messageText:", messageText);
// }

// console.log('sending Wellcome Message....');
// console.log("messageText:", messageText);

// let x = [2,4,'hello', 5];
// x.push('Ok');
// console.log(typeof x);
// x[3]= 3;
// console.log(x);

// function func1(){
//      let  x=["Ahoo", "Rahmin", "Safada", 512];
//      document.getElementById('p1').innerHTML = x;
//      let y = x.pop();
//      document.getElementById('p2').innerHTML = y;
//      let z = x.push('Kazim');
//      document.getElementById('p3').innerHTML = z;
// }    

// function func1(){
//     let x = ["Ahoo", "Ramin", "Speada", 512, 256,"Speada"];
//     document.getElementById('p1').innerHTML = x;
//     let y = x.lastIndexOf("Speada");
//     document.getElementById('p2').innerHTML = y;
// }

// function func1(){
//     let x = ['Ahoo', 'ramin', 'Speida', 512, 256, 'speida', 1024, 2,6,4,1,9, 'speida', 5,1];
//     document.getElementById('p1').innerHTML = x;
//     document.getElementById('p2').innerHTML = x.includes("Ali");
//     document.getElementById('p3').innerHTML = x.includes(1);
// }

// function func1(){
//     let x= ['Ramin', 'Ahoo', 'Speida', "Hossien"];
//     document.getElementById('p1').innerHTML = x;
//     x.sort();
//     document.getElementById('p2').innerHTML = x;
// }

// function func1(){
//     let x= [1,2,8,9,4,6,7,11,14,12];
//     document.getElementById('p1').innerHTML = x;
//     x.sort();
//     document.getElementById('p2').innerHTML = x;
// }
function func1(){
    let x= [1,2,8,9,4,6,7,11,14,12];
    document.getElementById('p1').innerHTML = x;
    x.reverse();
    document.getElementById('p2').innerHTML = x;
}