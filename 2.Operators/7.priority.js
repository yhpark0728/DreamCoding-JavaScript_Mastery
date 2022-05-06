let a = 2;
let b = 3;
let result = a + b * 4; //14 -> 수학적 계산법과 동일하다.
console.log(result);
result = a++ + b * 4; //예상) 14 O
console.log(result);
console.log(a); // a는 1이 증가하여 3이 되어 있다.

//수학 계산법과 동일하게 우선순위 계산을 위해서 ()를 사용해 준다.
let example = ((a + b) * 4) / 5; //14 -> 수학적 계산법과 동일하다.
console.log(example);