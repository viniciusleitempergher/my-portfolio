export function controlSection() {
  let section2 = false;
  document.addEventListener('scroll', (e) => {
    let scroll = window.scrollY;
    
    // section 2
    if (scroll >= 500 && !section2) {
      section2 = true;
      document.querySelector(".skills")?.classList.toggle("hidden")
    }
  })
}