
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
}


export const unee = async (options = {}) => {

  const { url, ...restOption } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers }
  } // 합성과 동시에 필요한 것만 추출

  let response = await fetch(url, restOption)

  if (response.ok) {
    response.data = await response.json()
  }

  /* response.then((res) => {
    console.log(res);
  }) */

  return response;
}

unee.get = (url, options) => {
  return unee({
    url,
    ...options
  })
}


unee.post = (url, body, options) => {
  return unee({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

unee.put = (url, body, options) => {
  return unee({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

unee.delete = (url, options) => {
  return unee({
    method: 'DELETE',
    url,
    ...options
  })
}

/* unee.post('www.naver.com', { name: 'unee' }, {
  mode: 'cors',
  headers: {},
  cache: 'no-cache',
  credential: 'same-origin'
}) */