/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

/* const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = prompt("지금 시간은 언제입니까?"); */

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
/* switch (thisTime) {
  case '아침':
    alert('뉴스 기사 글을 읽는다.');
    break;
  case '점심':
    alert('자주 가는 식당에 가서 식사를 한다.');
    break;
  case '저녁':
    alert('동네 한바퀴를 조깅한다.');
    break;
  case '밤':
    alert('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case '심야':
  case '새벽':
    alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
} */

/* switch문 → if문 변환 --------------------------------------------------- */
/* if (thisTime === '아침') {
    alert('뉴스 기사 글을 읽는다.');
} else if (thisTime === '점심'){
    alert('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === '저녁'){
    alert('동네 한바퀴를 조깅한다.');
} else if (thisTime ==='밤'){
    alert('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime ==='심야'||thisTime ==='새벽'){
    alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} */


/* switch vs. if -------------------------------------------------------- */

// 0 ~ 6 의 값을 받는다.
/* 0 = '일'
1 = '월'
2 = '화'
3 = '수'
4 = '목'
5 = '금'
6 = '토' */

function getRandom(n){
  return Math.round(Math.random() * n)
}

function getDay(dayValue){

  switch (dayValue) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }

}

// random은 0 ~ 1까지만 수를 뽑아내고 * 6을 해서 최대로 6까지 나오게끔 한다.
let result = getDay(getRandom(6));

console.log(result);