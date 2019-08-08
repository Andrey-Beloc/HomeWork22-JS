'use srict';

//Задание №1
let arr = [2, -5, 1, -2, 0, -3, 2, -14];
let possitiveArr = arr.filter(function(num) {
    return num > 0;
});

let sqrtArrNum = possitiveArr.map(function sqrtArr(num){
    return Math.sqrt(num);
});
console.log(sqrtArrNum);


//Задание №2
function sumArr(arr2){
    let result = 0;
    arr2.reduce(function(sum,current){
      if(current == 0){
        return result = sum; 
      }
      return sum + current;
         
    },0);
    return result;
};

let arr2 = [4, 3, 5, 5, 1, 0, 8, 6];
console.log(sumArr(arr2));

//Задание №3
function summArguments(){
  let sumArg = 0;
  for(let i = 0; i < arguments.length ; i++){
    sumArg += arguments[i];
  }
  return sumArg;    
};

console.log(summArguments(10,2,8));


