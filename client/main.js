/* global gsap */

import { xhrData, insertLast, xhrPromise, unee, createUserCard, getNode as $, renderUserCard, delayP, renderSpinner, changeColor, renderEmptyCard, attr } from "./lib/index.js";



/* xhrPromise
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    insertLast(document.body, JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err);
  })
 */
/*
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertLast('body',JSON.stringify(res))
  },
  (err)=>{
    insertLast('body','데이터 로딩에 실패했습니다.')
  }
)
 */

/* async function render() {

  await delayP(2000);
  let response = await
    unee.get('https://jsonplaceholder.typicode.com/users/1')

  console.log(response.data);
}

render() */

// rendingUserList
//ajax get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

// 1. userList.js 로 간다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록

const userCardContainer = $('.user-card-inner');

async function rendingUserList() {

  renderSpinner(userCardContainer)

  try {

    await delayP(1000)

    $('.loadingSpinner').remove()

    let response = await unee.get('http://localhost:3000/users')

    let userData = response.data;

    userData.forEach(data => renderUserCard(userCardContainer, data))

    changeColor('.user-card')

    gsap.to(gsap.utils.toArray('.user-card'), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    })
  } catch (err) {
    renderEmptyCard(userCardContainer)
  }
}

rendingUserList();


function handler(e) {
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  if (!deleteButton || !article) return

  let id = attr(article, 'data-index').slice(5);

  unee.delete(`http://localhost:3000/users/${id}`)
    .then(() => {
      userCardContainer.innerHTML = '';
      rendingUserList();
    })


}


userCardContainer.addEventListener('click', handler)

