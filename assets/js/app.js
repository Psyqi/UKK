const burger = document.querySelector('.burger')
const menutog = document.querySelector('.menutog')
const menu = document.querySelector('.menu')

burger.addEventListener('click', function() {
  this.classList.toggle('change')
  menutog.classList.toggle('change')
  menu.classList.toggle('change')
})

menu.addEventListener('click', function() {
  this.classList.remove('change')
  menutog.classList.remove('change')
  burger.classList.remove('change')
})