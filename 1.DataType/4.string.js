// 문자열타입
let string = "안녕하세요";
string = '안녕!';
console.log(string);


//특수 문자 출력
string = '"안녕!"';
console.log(string);

// \n , \t, \를 표시하기 위해선 두번
string = '안녕!\n용호야!\t\t내 이름은\\'
console.log(string);

//템플릿 리터럴(Template Literal) ``
let id = '용호';
let greetings = "'안녕!," + id + "\n즐거운 하루 보내세요!'";
console.log(greetings);

greetings = `'안녕, ${id}
즐거운 하루 보내세요!'`;
console.log(greetings);