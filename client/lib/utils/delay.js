

import { getNode } from '../dom/getNode.js'
import { isNumber, isObject } from './typeOf.js'



const first = getNode('.first');
const second = getNode('.second');



function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}


// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

/* 
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    delay(()=>{
      first.style.top = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
})
 */


/* delayP()
  .then(() => {
    first.style.top = '-100px';
    return delayP()
  })
  .then(() => {
    first.style.transform = 'rotate(360deg)';
    return delayP()
  })
  .then(() => {
    first.style.top = '0px';
  }) */


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}) {

  // defaultOptions

  let config = { ...defaultOptions }

  if (isNumber(options)) {
    config.timeout = options;
  }

  // 객체 합성  mixin

  config = { ...config, ...options };


  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}

/* delayP(3000).then((res) => {
  console.log(res); // 진짜 성공
})
 */
/* delayP()
  .then(res => console.log(res))
  .catch(err => console.log(err))
 */


/* async function 라면끓이기() {

  try {

    await delayP(1500)
    console.log('물넣기');

    await delayP(1500)
    console.log('스프넣기');

    await delayP(1500)
    console.log('면넣기');

    await delayP(1500)
    console.log('계란넣기');

    // throw new Error('계란 껍질이 들어가버렸다');

    await delayP(1500)
    console.log('그릇에담기');

  } catch (err) {
    console.log(err);
  }

}

라면끓이기() */