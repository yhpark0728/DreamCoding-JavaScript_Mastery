const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

//원하는 형태의 object를 생성하는 함수
function makeObj(name, age) {
  return {
    name,
    age,
  };
}
