var arr = [];
var arr2 = [];
var arr3 = [];
arr4 = [];
let sum;
let sum2;

function createArr(str, str2) {
    for (let i = 1; i < str; i = i * 10) {
      let x = Math.floor((str / i) % 10);
      arr.unshift(x);
    }
      console.log(arr);
    
    for (let i = 1; i < str2; i = i * 10) {
      let x = Math.floor((str2 / i) % 10);
      arr2.unshift(x);
    }
    console.log(arr2);
  }


  function calc () {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            sum = arr[i] * arr2[j];
            arr3.push(sum);
        }
    }
   console.log(arr3); 
  }
  


    createArr(43, 123);
  console.log(calc());