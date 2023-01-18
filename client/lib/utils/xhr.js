import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { typeError } from '../error/typeError.js';

/* readyState
0: uninitalized
1: loading
2: loaded
3: interative
4: complete */


/* const xhr = new XMLHttpRequest();

// 비동기 통신 오픈
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.addEventListener('readystatechange', () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    if (xhr.readyState === 4) {
      console.log('통신 성공');
    }
  } else {
    console.error('통신 실패');
  }
});

// 서버에 요청
xhr.send(); */


export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}) {


  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  /*  Object.entries(headers).forEach(([key, value]) => {
     xhr.setRequestHeader(key, value);
   }); */

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;  // 객체 구조 분해 할당

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        // console.log('통신 성공');

        onSuccess(JSON.parse(response));
        console.log();
      }
    } else {
      // console.error('통신 실패');
      onFail('통신 실패')
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

/* xhrData({
  url: 'https://jsonplaceholder.typicode.com/user',
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.error(err);
  }
}) */


xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}
xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}



/* xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
  "name": "lookatme",
  "username": "bora",
  "email": "yoonbora1803@naver.com",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "010-506-4231",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}) */


// promise API

const defaltOption = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: null
}

export function xhrPromise(options = {}) { //option = {} > option이 객체라는 것을 명시적으로 표시 
  const xhr = new XMLHttpRequest();

  const { method, url, body, headers } = Object.assign({}, defaltOption, options)

  if (!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.');

  xhr.open(method, url);

  xhr.send(body)

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response))
        }
      } else {
        reject('에러입니다.');
      }
    })
  })

}

// xhrPromise({
//   url:'https://jsonplaceholder.typicode.com/users/1'
// })
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

xhrPromise.get = (url) => {
  return xhrPromise({
    url
  })
}

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST'
  })
}

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT'
  })
}

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE'
  })
}

xhrPromise
  .get('https://jsonplaceholder.typicode.com/users/1') // promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })


//async await



/* function delayA() {
  return new Promise((resolve, reject) => {
    resolve('완료')
  })
} */

async function delayA() {
  return '완료'
}

let result = await delayA();



