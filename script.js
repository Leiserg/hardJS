let num = 266219;
let arr = (num).toString().split('');

const res = (arr.reduce((acc, rec) => acc * rec) ** 3).toString();

console.log(res.substring(0,2));
