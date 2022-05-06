let b; //선언문
b =2; //표현식 이면서 할당문

//let a = let b; 선언문 자체는 값을 생성하지 않기 때문에 할당할 수 없다.
let a = (b = 2);
console.log(a);