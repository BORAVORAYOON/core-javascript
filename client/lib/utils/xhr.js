/* readyState
0: uninitalized
1: loading
2: loaded
3:interative
4:complete
*/

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


function xhrData(method, url, body) {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;  // 객체 구조 분해 할당

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log('통신 성공');
        console.log(JSON.parse(xhr.response));
      }
    } else {
      console.error('통신 실패');
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(xhrData));
}


xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
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
})

