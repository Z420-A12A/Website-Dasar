/*menampilkan menu navigasi dari  icon hamburger*/
const HamburgerNavigation = document.getElementsByClassName('hamburger-toggle')[0]
const LinkNavbar = document.getElementsByClassName('navbar-list')[0]

HamburgerNavigation.addEventListener('click', ()=>{
    LinkNavbar.classList.toggle('active')
})


