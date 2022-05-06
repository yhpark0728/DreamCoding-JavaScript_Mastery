### 1.변수

```javascript
let a = 0;
console.log(a);

a = 1;
console.log(a);

let b;
console.log(b);

b = 2;
console.log(b);코드를 입력하세요
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/bf52312d-378e-43ce-a7eb-6ac8ef23eafb/image.png)

### 2. 변수 이름

```javascript
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
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/a1fb0a1d-66d9-4fc8-8efa-8f77a7cc46cf/image.png)

### 3. 숫자 타입(number)

```javascript
let integer = 123; //정수
let negative = -123; //음수
let double = 1.23;

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; //2진수
let octal = 0o173; //8진수
let hex = 0x7b;

console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); //0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); //NaN (Not a Number)

let bigInt = 21346578912314654891231348645612313n;
console.log(bigInt);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/c5fea978-76f2-4e29-8416-ab1df3e8e136/image.png)

### 4. 문자 타입(string)

```javascript
// 문자열타입
let string = '안녕하세요';
string = '안녕!';
console.log(string);

//특수 문자 출력
string = '"안녕!"';
console.log(string);

// \n , \t, \를 표시하기 위해선 두번
string = '안녕!\n용호야!\t\t내 이름은\\';
console.log(string);

//템플릿 리터럴(Template Literal) ``
let id = '용호';
let greetings = "'안녕!," + id + "\n즐거운 하루 보내세요!'";
console.log(greetings);

greetings = `'안녕, ${id}
즐거운 하루 보내세요!'`;
console.log(greetings);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/326e60ec-6f9e-4250-a32a-6e1f831483c2/image.png)

### 5. 불리언 타입(boolean)

```javascript
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
```

### 6. null과 undefined 타입

```javascript
// null, undefined의 개념을 이해하고 넘어가자

let variable; // 변수초기화, undefined 상태
console.log(variable);

variable = null; //null 을 할당
console.log(variable);

let activeItem; //아직 활성화된 아이템이 있는지 없는지 모르는 상태

activeItem = null; //활성화된 아이템이 없는 상태

console.log(typeof 123);
console.log(typeof '123');

console.log(typeof null); //null 이라는 object가 생성
console.log(typeof undefined);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/016b4c8f-9cb1-4cd2-a8e2-46da536e5643/image.png)

> 위 내용 까지는 단일 데이터를 표현하고 담을 수 있는 원시(primitive) 타입에 대해서 알아보았다. 아래 내용 부터는 복합적인 데이터를 담을 수 있는 객체(object) 타입에 대해서 알아보자. object는 여러가지 데이터를 묶어서 보관하는 상태 뿐만 아니라 상태에 연관된 행동, 즉, 함수를 묶어 둘 수 있다. 함수에 대해서는 뒤에서 다루기로 하자!

### 7. 객체 타입(object)

```javascript
let appleName = 'apple';
let color = 'red';
let display = 'red-apple';

let orangeName = 'orange';

let apple = {
  name: 'apple',
  color: 'red',
  display: 'red-apple',
};

let orange = {
  name: 'orange',
  color: 'orange',
  display: 'orange',
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/87a1a72b-424c-42cd-9a4e-a89a61a84988/image.png)

### 8. 값과 참조의 차이

```javascript
// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  //0x1234
  name: '사과',
};
let orange = apple; //0x1234
orange.name = '오렌지';

console.log(apple);
console.log(orange);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/2a082a3e-e745-42be-9e43-5976f7865651/image.png)

### 9. 상수 변수 const

```javascript
let a = 1;
a = 2;

//const 재할당 불가능
//1. 상수
//2. 상수변수 또는 변수
const text = 'hello';
text = 'hi'; //다음과 같이 재할당 불가능
```

(Reuslt)
![](https://velog.velcdn.com/images/yhpark0728/post/ebcc4fb7-9f68-4832-9bc1-e20fa3317f39/image.png)
위와 같은 오류가 발생한다.

```javascript
//let 재할당이 가능
let a = 1;
a = 2;

//const 재할당 불가능
//1. 상수
//2. 상수변수 또는 변수
const text = 'hello';
//text = 'hi'; 와 같이 재할당 불가능

//1, 상수
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: 'red-apple',
};

console.log(apple);

apple.name = 'oragne';
apple.display = 'green-apple';
console.log(apple);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/a2ab2eb5-4e4a-498f-9cbc-a69aa9dc9399/image.png)

### 10.타입을 확인하는 방법(typeof)

```javascript
// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');

// 할당된 값에 따라 데이터 타입이 결정된다. => Javascript는 weakly typed programming language 이다.
```

(Result)

![](https://velog.velcdn.com/images/yhpark0728/post/582d8a29-4c6a-441a-b642-43f5b30c71bc/image.png)
