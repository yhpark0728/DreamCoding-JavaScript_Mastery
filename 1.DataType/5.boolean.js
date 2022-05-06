//boolean type
let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

//example
let isFree = true;
let isActivated = false;
let isEntroleed = true;
console.log(isActivated);

console.clear();

// falshy 거짓인 값
console.log(!!0); //0이 참인지 거짓인지 
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'hi');
console.log(!!{}); //텅빈 object일 경우 object 자체가 참이기 때문에 true
console.log(!!Infinity);
