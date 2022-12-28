/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null); // typeof는 object로 나온다.

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let lovely = 'unee';
let message3 = `안녕 내 이름은 ${lovely} 야`;

console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.915;

console.log("number's type : ", typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 220915n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('uid'));

// const fuc = function(){};


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
// const user = new Object();
//객체리터럴
const user = {  
  name: 'unee',
  age: 3,
  cat: function(){
    return '야옹야옹'
  },
  alert: function(){}
};

// Array
// let list = new Array();
 //배열 리터럴
 // collection
let list = [10,100,100,9,1,5];

// function
function sum(a,b){
  return a + b
}

console.log( sum(3,4) ); 

function fishBreadCase(data){
  return `${data} 맛 붕어빵 입니다`
}

console.log(fishBreadCase('피자'));

// this
