'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} 
function array(){
  let arr = [];
  for (let i = 0; i < 7; i++){
    arr.push(getRandomInt(10, 11111111111111111).toString());
    if (arr[i].charAt(0) === '2' || arr[i].charAt(0) ==='4') {
      console.log(arr[i]);
    }
  }
  console.log(arr);
}
array();

///////////////////////////////////////////////////////////////////

let n = 100;

for (let i = 2; i <= n; i++) {
    let primeNumber = 1;
    if (i > 2 && i % 2 !== 0) {
        for (let j = 3; j*j <= i ; j=j+2) {
            if (i % j === 0) {
                primeNumber = 0;
                break;
            }
        }
    } else if (i !== 2) {
      primeNumber = 0;
    } 
	
	if (primeNumber === 1) {
      console.log(i + ` Делители этого числа: 1 и ${i}`);
    }
}