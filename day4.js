//anonymous function 

// Question 1. Print odd numbers in an array

//((array)=>{
//    for(let i=0;i<array.length;i++){
//       if(array[i]%2!=0){
//           console.log(array[i])
//       }
//    }
// })([1,2,3,4]);

// Output :-
// 1
// 3

// --------------------------------------------------------------------------


// Question 2. Convert all the strings to title caps in a string array

//((str)=>{
//    for(let  i=0;i<str.length;i++){
//       if(str[i] ){
//        var str1 = str[i][0].toUpperCase();
//        var str2 = str[i].slice(1);
//        console.log(str1.concat(str2));
//        }
//    }
//})(["apple","banana","grapes",]);

// Output :-
// Apple
// Banana
// Grapes

//-----------------------------------------------------------------------------

// Question 3. Sum of all numbers in an array


//((number)=>{
//   var num1 =0;
//   for(let i=0;i<number.length;i++){
//    num1+=number[i];
//    }console.log(num1);
//})([1,2,3,4,5]);

//Output :-
//15

//-----------------------------------------------------------------------------

// Question 4. Return all the prime numbers in an array



//((array)=>{
//         
//          for(let i=0;i<array.length;i++){
//            let num = 0;
//          for ( let j=2;j<i;j++){
//             if(i%j ==0){
//                num = 1;
//             }
//      }  if(i>1 && num == 0){
//        console.log(i);
//      }
//              
//    }
//        })([1,2,3,4,5,6,7,8,9,10]);
//Output :-   
//2
//3
//5
//7
//

//-----------------------------------------------------------------------------
//Question 5. Return all the palindromes in an array

//((array)=>{
//    var b = '';
//   for(var i=array.length -1;i>=0;i--){
//    b += array[i];
//   }
//   if(b == array){
//    console.log(` ${array} array is palindromes`);
//  }else{
//   console.log(` ${array} array is not palindromes`);
// }
//})("level");
//
//Output :- 
//
//level array is palindromes

//-----------------------------------------------------------------------------


// Question 6.Return median of two sorted arrays of the same size.

//((array,array1)=>{
//    let a = "";
//    let b = "";
//     var sum = array + "," + array1;
//     for(var i=0;i<sum.length;i++){
//        if(sum[i] != ","){
//            a += sum[i];
//         }
//        };
//        b = [...a];   
//        let c = b.sort();   
//        let val1 = c[array.length -1];
//        let val2 = c[array.length];
//        let sumof = parseInt(val1) + parseInt(val2);
//        console.log(`${sumof} is the median of two sorted arrays`);
//    
//})([1,3,5,7],[2,4,6,8]);
//
//Output :-
//
//9 is the median of two sorted arrays

//-----------------------------------------------------------------------------

// Question 7. Remove duplicates from an array

//((array)=>{
//    let a = [...new Set(array)]
//    console.log(a);
//})("array");
//
//Output:- 
// 
// ['a', 'r', 'y']

//-----------------------------------------------------------------------------

// Question 8.Rotate an array by k times

//((array,k)=>{
//    let a = [...array[0]];
//    for(let i=0;i<k;i++){
//      let b = a.pop();
//      a.unshift(b);
//      }console.log(a);
//})(["array"],[2]);

//Output:- 
// 
//['a', 'y', 'a', 'r', 'r']

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//   Programs in arrow functions :-

// Question 1. Print odd numbers in an array

//let oddnumber = (array)=> {
//   for(let i=0;i<array.length;i++){
//       if(array[i]%2!=0){
//         console.log(array[i])
//         }
//       }
//    }
//   oddnumber([1,2,3,4]);
//
//  Output:-
//   1
//   3  

//-----------------------------------------------------------------------------

// Question 2. Convert all the strings to title caps in a string array

//let string = (str) => {
//  for(let  i=0;i<str.length;i++){
//       if(str[i] ){
//        var str1 = str[i][0].toUpperCase();
//        var str2 = str[i].slice(1);
//        console.log(str1.concat(str2));
//      }
//    }
//}
//string(["apple","banana","grapes",]);

// Output :-
// Apple
// Banana
// Grapes

//-----------------------------------------------------------------------------

// Question 3. Sum of all numbers in an array


//let sum = (number) => {
//   var num1 =0;
//   for(let i=0;i<number.length;i++){
//    num1+=number[i];
//    }console.log(num1);
//}
//sum([1,2,3,4,5]);

//Output :-   
//15

//-----------------------------------------------------------------------------

//Question 4. Return all the prime numbers in an array

//let oddnumber = (array)=>{
//         
//          for(let i=0;i<array.length;i++){
//            let num = 0;
//          for ( let j=2;j<i;j++){
//             if(i%j ==0){
//                num = 1;
//             }
//      }  if(i>1 && num == 0){
//        console.log(i);
//      }
//              
//    }
//        }
//    oddnumber([1,2,3,4,5,6,7,8,9,10]);
//Output :-   
//2
//3
//5
//7

//-----------------------------------------------------------------------------

//Question 5. Return all the palindromes in an array

//var a = (array)=>{
 //   var b = '';
 //  for(var i=array.length -1;i>=0;i--){
 //   b += array[i];
 //  }
 //  if(b == array){
 //   console.log(` ${array} array is palindromes`);
//  }else{
 //  console.log(` ${array} array is not palindromes`);
 //}
//}
//a("mom");

//Output :- 
//
//mom array is palindromes


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------