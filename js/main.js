
// $(document).ready(function(){
//     $('.bars').click(function(){
//         console.log('clicked')
//         $('.sec-nav-wrapper .links').toggleClass('collapse');
//     })
// })
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  window.onload=function(){
    document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
  }
  
  