// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a); //0

a++; // a = a + 1;
console.log(a); //1

a--; // a = a - 1;
console.log(a);


// console.clear();
// 주의할 점  ( ++ 또는 -- 의 위치 )
// a++ : 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a : ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
let b = a++; // b에 a에 할당된 값을 증가 시킨 후에 a 값을 1만큼 증가시킨다.
console.log(b); // 1이 아님에 주의!!

//위 코드를 쉽게 생각해 보면
//let b = a++; 에서 ++연산보다 a가 앞에 있기 때문에
// a를 b에 할당 한 후 ++ 연산을 실행 한다고 생각하자!
// 의도한 대로 a가 1만큼 증가한 값을 할당하고 싶을 경우
a = 0;
let c = ++a;;
console.log(c);
