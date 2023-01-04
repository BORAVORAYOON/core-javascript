/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// rest parameter
const calculateTotal = (...args) => { //...은 전개고 args는 진짜 배열

  let total = 0;
  args.forEach((item, index) => {
    total += item
  })

  /*   args.reduce((acc, item) => acc, item )
      console.log();
  */

  return total;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;


// 화살표 함수와 this
function nomalFunction() {
  console.log('일반함수 : ', this);
}

const arrowFunction = () => {
  console.log('화살표함수 : ', this);
}

// nomalFunction()
// arrowFunction()

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this 를 찾기 위해서는 arrowFunction 이 오히려 좋아

const user = {
  name: 'Bora',
  age: 31,
  address: '인천시 연수구 연수동',
  grades: [89, 90, 100],
  totalGrades: function () {
    /* let total = 0;
    this.grades.forEach((item) => {
      this
    })
    return total */

    function foo() {
      console.log('foo : ', this);
    }
    const bar = () => {
      console.log('bar : ', this);
    }

    foo.call(user) //user
    bar() // user object
  }
}

console.log(user.totalGrades())

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

//숙제!!
// pow(numeric: number, powerCount: number): number; 거듭제곱 안됨
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric
  }

  return result;
};

let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numeric, 1) // 1은 초기값이고 초기값이 없게 되면 0을 무한으로 곱하는 것을 반복하게 된다.

// pow(2, 53)

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  if (!repeatCount) {
    throw new Error('숫자 좀 넣어라')
  }
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc + text, '')

// repeat('hello', 3) //'hello''hello''hello''hello''hello'