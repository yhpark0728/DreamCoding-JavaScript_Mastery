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
console.log(true ===1); //false

const obj1 = {
    name : 'js'
}

const obj2 = {
    name : 'js'
}

console.log(obj1 == obj2); //false
//false 인 이유? -> obj1과 obj2 에는 메모리 주소가 저장되어 있는데 obj1과 obj2는 다른 object이기 때문에 메모리 주소가 서로 다르다!!
console.log(obj1 === obj2); //false
console.log(obj1.name == obj2.name);//true
console.log(obj1.name === obj2.name);//true

let obj3 = obj2; //obj3에 obj2의 메모리 주소를 할당
console.log(obj3 == obj2);//true
console.log(obj3 === obj2);//true
