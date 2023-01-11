//addClass
function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (typeof className !== 'string') {
    typeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.add(className)
}

//removeClass
function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (!className) {
    node.className = ''
    return;
  }

  if (typeof className !== 'string') {
    typeError('removeClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.remove(className);
}

//toggleClass
function toggleClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (typeof className !== 'string') {
    typeError('toggleClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.toggle(className);
}

//getCss
function getCss(node, prop) {
  if (typeof node === 'string') node = getNode(node);

  if (!(prop in document.body.style)) {
    syntaxError('getCSS 함수의 두 번째 인자인 prop은 유효한 속성이 아닙니다.')
  }

  return getComputedStyle(node)[prop]; // getComputedStyle(node)는 객체
}

//setCss
function setCss(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    syntaxError('setCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  if (!value) {
    syntaxError('setCSS 함수의 세 번째 인자는 필수값 입니다.')
  }

  node.style[prop] = value;

}

//css
/* function css(node, prop, value) {
  if (!value) {
    return getCss(node, prop)
  } else {
    setCss(node, prop, value)
  }
} */

const css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value)