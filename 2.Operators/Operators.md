### 1. 리터럴 Literal

코드에서 값을 나타내는 표기법
123, '123', true, {}, []

> 템플릿 리터럴(Template Literal)

    - function(){} -> 함수 리터럴
    - 123n -> bigInt 리터럴
    - 0b101 -> bianry 리터럴

### 2. 표현식(Expressions)

값으로 평가 될 수 있는 문

```javascript
1; // 숫자 리터럴 표현식
1 + 1; // 연산자 표현식
call(); // 함수 호출 표현식
let b; //선언문
b = 2; // 할당문, 할당 표현식 문
```

> 코드가 실행되면 어떤 값이 생성되는가? 에 유념하여 코드를 읽어보자!

### 3. 값으로 평가될 수 있는 것들?

```javascript
let b; //선언문
b = 2; //표현식 이면서 할당문

//let a = let b; 선언문 자체는 값을 생성하지 않기 때문에 할당할 수 없다.
let a = (b = 2);
console.log(a);
```

### 4. 산술 연산자

```javascript
// 산술 연산자 (arithmetic Operators)
// +
// -
// *
// /
// %
// ** 지수

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); //es7 제곱 console.log(Math.pow(4,2));

// + 연산자 주의점
let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환됨
console.log(text); //'11'
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/23289c88-2f23-41bf-81c0-8ba0d5b34b32/image.png)

### 5. 단항 연산자

```javascript
// 단항 연산자 Unary Operators
// +(양)
// -(음)
// !(부정)

let a = 5;
a = -a; // -1 * 5
console.log(a);
console.log(-a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있다.
console.clear();
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/58d08324-71fa-45af-9b76-8a8ced0883d4/image.png)

### 6. 할당 연산자

```javascript
// 할당연산자 (Assignment Operators)
let a = 1;
a = a + 2;
console.log(a);

a += 2; // a = a + 2 와 같다.
console.log(a);

a - +2;
console.log(a);

a *= 2;
a %= 2;
a **= 2;
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/38b5aaad-274a-40f2-8dbe-3974110c007d/image.png)

### 7. 증감 연산자

```javascript
// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a); //0

a++; // a = a + 1;
console.log(a); //1

a--; // a = a - 1;
console.log(a);

console.clear();
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
let c = ++a;
console.log(c);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/00590264-bbba-4b3f-a64a-ec2123ba228e/image.png)

### 8. 비교 연산자

```javascript
// 대소 관계 비교 연산자 (Relational Operators)
// > 크다
// < 작다
// >= 크거나 같다
// <= 작거나 같다
console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 3);
console.log(2 <= 3);
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/9d01b00d-2780-4cd1-bc4e-25a5a607178d/image.png)

### 9. 연산자 우선순위

```javascript
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
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/a8ee4618-86aa-42c2-b21f-8fab3bcab15b/image.png)

### 10. 동등 비교 연산자

```javascript
// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 == 3);
console.log(2 != 3);
console.log(2 == '2'); //true -> type은 다르지만 순자와 문자열을 비교할 때 문자열 2가 숫자로 자동변환되면서 비교된다!
console.log(2 === '2'); //false -> type이 다르기 때문에
console.log(true == 1); //true
console.log(true === 1); //false

console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); //false
//false 인 이유? -> obj1과 obj2 에는 메모리 주소가 저장되어 있는데 obj1과 obj2는 다른 object이기 때문에 메모리 주소가 서로 다르다!!
console.log(obj1 === obj2); //false
console.log(obj1.name == obj2.name); //true
console.log(obj1.name === obj2.name); //true

let obj3 = obj2; //obj3에 obj2의 메모리 주소를 할당
console.log(obj3 == obj2); //true
console.log(obj3 === obj2); //true
```

(Result)
![](https://velog.velcdn.com/images/yhpark0728/post/a70a5cfa-0950-4849-af11-da2bbbec5f72/image.png)
