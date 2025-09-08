function init() {
  const mainElement = document.querySelector('.page-main');
  const footerElement = document.querySelector('.footer');
  mainElement.style.marginBlockEnd = footerElement.offsetHeight + 'px';
}

init();
