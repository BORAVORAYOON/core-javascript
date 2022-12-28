/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

console.log(String(YEAR));

// undefined → '2022', null → 'null'
let days = null;
console.log(String(days));

// boolean → 'true' or 'false'
let isKind = true;
console.log(String(isKind + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed → NaN
console.log(Number(undefined));

// null
let money = null;
console.log((Number(money)));

// boolean
let cutie = true;
console.log(cutie / 1);

// string
let num = '        915      ';
console.log(num * 1);

// numeric string
let width = '320px';
console.log(parseInt(width,10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' → false
// 위에 나열한 것 이외의 것들 → true
// !는 부정의 의미, !! > 부정의 부정이기 때문의 긍정

console.log(Boolean(' '));
console.log(Boolean(!''));