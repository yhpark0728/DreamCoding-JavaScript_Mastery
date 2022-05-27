const apple = {
  name: 'apple',
  display: function () {                //display라는 이름의 function을 생선한다.
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();
