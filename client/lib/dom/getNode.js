function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getnode 함수의 인자는 문자 타입 이어야 합니다.')
  }
  return document.querySelector(node)
}

console.log(getNode('.first'));

function getNodes(node) {
  if (typeof node !== 'string') {
    throw new Error('getnode 함수의 인자는 문자 타입 이어야 합니다.')
  }
  return document.querySelectorAll(node)
}


console.log(getNodes('.second'));