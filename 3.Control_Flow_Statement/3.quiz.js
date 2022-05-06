// 퀴즈!
let num = 2;
//numd의 숫자가 짝수이면 Even, 홀수라면 Odd를 출력하도록 작성

//case1. if문을 활용
if (num % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}

//case2. ternary 사용
//num % 2 === 0 ? console.log('Even') : console.log('Odd');

let message = num % 2 === 0 ? 'Even' : 'Odd';
console.log(message);
