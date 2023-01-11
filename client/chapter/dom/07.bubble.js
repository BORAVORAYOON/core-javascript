/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', (e) => {
  let elem = e.currentTarget;
  // console.log(e.target);
  // console.log(e.currentTarget);
  /* console.log(this); // === e.currentTarget */
  // console.log(elem);
  console.log('%c visual', 'background:royalblue; color: white');
  css('.pop', 'display', 'block');
})

getNode('.pop').addEventListener('click', (e) => {
  e.stopPropagation();
  css('.pop', 'display', 'none');
})

// target : 마우스가 처음 만나는 대상(직접적으로 클릭한 대상)
// currentTarget : 이벤트가 걸린 대상(직접 클릭한 대상이 아닌 이벤트가 걸린 대상)
// this를 사용할 수도 있지만 this의 경우 화살표 함수에는 사용할 수 없기 때문에 target과 currentTarget이 있는 것

/* news.addEventListener('click', function () {
  console.log('%c news', 'background:orange; color: white');
})

desc.addEventListener('click', function (e) {
  e.stopPropagation()
  console.log('%c desc', 'background:hotpink; color: white');
}) */

/* 캡처링 ----------------------------------------------------------------- */