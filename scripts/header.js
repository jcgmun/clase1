function isMenuOpen (){
  const menuItem = document.querySelector(".menu");
  return menuItem.classList.contains("menu--open")
}

function closeMenu(){
  const menuItem = document.querySelector(".menu");
  const menuOverlay = document.querySelector(".menu__overlay");
  menuItem.classList.remove("menu--open");
  menuOverlay.classList.remove("menu--open");
}

function openMenu(){
  const menuItem = document.querySelector(".menu");
  const menuOverlay = document.querySelector(".menu__overlay");
  menuItem.classList.add("menu--open");
  menuOverlay.classList.add("menu--open");
}

function menuButtonClickHandler() {
  if (isMenuOpen()){
    closeMenu()
  } 
  else {
    openMenu()
  }
}

function isKeyEscape(keyCode){
  return keyCode==="Escape"
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleHeaderResize = debounce(() => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
}, 200); // Runs at most once every 200ms

function init(){
  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach((button) => {
    button.addEventListener("click", menuButtonClickHandler);
  });
  const menuOverlay = document.querySelector(".menu__overlay");
  menuOverlay.addEventListener("click",closeMenu)
  document.addEventListener("keydown",(ev)=>{
    if (isKeyEscape(ev.code) && isMenuOpen()){
      closeMenu()
    }
  })
  window.addEventListener("resize", handleHeaderResize);
}
init()