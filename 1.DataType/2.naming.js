/**
 * 변수 규칙!
 * 라틴 문자(0-9, a-z , A-Z)
 * 대소문자를 구분함
 * 추천: camelCase, likeThis
 * 한국어 X
 * 예약어 X
 * 숫자로 시작 X
 * 특수문자 X
 * 이모지 X
 * 여러개의 변수를 1,2,3 등으로 구분 X -> 최대한 의미있게, 구체적인 이름으로 작성
 */
let apple;
let redApple;

//나쁜예제
let number = 30;
let audio1;
let audio2;

//좋은예제
let myAge = 20;
let backgroundAudio;
let windAudio;

//Tip
let audioBackground;
let audioWind;

console.log(number);
console.log(myAge);