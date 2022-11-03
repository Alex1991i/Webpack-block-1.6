import '../scss/style.scss'

const windowInnerWidth = window.innerWidth

if (windowInnerWidth < 768) {
  const swiper1 = new Swiper('.swiper-brands', {
    pagination: {
      el: '.pagination-brands',
      clickable: true
    },
    spaceBetween: 20,
    speed: 1000,
    loop: true
  })
  const swiper2 = new Swiper('.swiper-technic', {
    pagination: {
      el: '.pagination-technic',
      clickable: true
    },
    spaceBetween: 20,
    speed: 1000,
    loop: true
  })
  const swiper3 = new Swiper('.swiper-price', {
    pagination: {
      el: '.pagination-price',
      clickable: true
    },
    spaceBetween: 20,
    speed: 1000,
    loop: true
  })
}

let showAllBtn = document.querySelectorAll('.arrow')
let brandsHeight = document.querySelectorAll('.brands__container')

for (let i = 0; i < showAllBtn.length; i++) {
  function brandsShowAll(height, text) {
    brandsHeight[i].style.height = height
    showAllBtn[i].textContent = text
    showAllBtn[i].classList.toggle('arrow')
    showAllBtn[i].classList.toggle('arrow_transform')
  }
  showAllBtn[i].addEventListener('click', function () {
    if (brandsHeight[i].style.height !== '100%') {
      brandsShowAll('100%', 'Скрыть')
    } else {
      brandsShowAll('160px', 'Показать все')
    }
  })
}

let menu = document.querySelector('.sidebar')
let burger = document.querySelector('.burger')
let body = document.querySelector('.main__position')
let header = document.querySelector('.header')
let close = document.querySelector('.close')
let telephone = document.querySelectorAll('.call')
let chat = document.querySelectorAll('.chat')
let callback = document.querySelectorAll('.callback')
let callbackClose = document.querySelectorAll('.callback__close')

burger.addEventListener('click', function () {
  menu.style.display = 'block'
  body.style.opacity = 0.04
  header.style.opacity = 0.04
  menu.style.opacity = 1
  menu.style.top = '-10px'
  menu.style.left = '0px'
})

const closeMenu = function () {
  menu.style.display = 'none'
  body.style.opacity = 1
  header.style.opacity = 1
  menu.style.opacity = 0
  menu.style.top = '100px'
}

close.addEventListener('click', closeMenu)

for (let i = 0; i < callback.length; i++) {
  for (let i = 0; i < telephone.length; i++) {
    telephone[i].addEventListener('click', function () {
      callback[0].style.display = 'block'
      setTimeout(() => {
        body.style.opacity = 0.04
        header.style.opacity = 0.04
        menu.style.opacity = 0.04
        if (windowInnerWidth > 767) {
          callback[0].style.transform = 'translateX(-440px)'
          callbackClose[0].style.transform = 'translateX(-100px)'
        } else {
          callback[0].style.transform = 'translateX(-320px)'
        }
        callback[0].style.transition = '0.8s'
      }, 200)
    })
  }

  for (let i = 0; i < chat.length; i++) {
    chat[i].addEventListener('click', function () {
      callback[1].style.display = 'block'
      setTimeout(() => {
        body.style.opacity = 0.04
        header.style.opacity = 0.04
        menu.style.opacity = 0.04
        if (windowInnerWidth > 767) {
          callback[1].style.transform = 'translateX(-440px)'
          callbackClose[1].style.transform = 'translateX(-100px)'
        } else {
          callback[1].style.transform = 'translateX(-320px)'
        }
        callback[1].style.transition = '0.8s'
      }, 200)
    })
  }

  callbackClose[0].addEventListener('click', function () {
    callback[0].style.display = 'none'
    body.style.opacity = 1
    header.style.opacity = 1
    if (windowInnerWidth > 767) {
      callback[0].style.transform = 'translateX(440px)'
    } else {
      callback[0].style.transform = 'translateX(320px)'
    }
    if (windowInnerWidth > 1439) {
      menu.style.opacity = 1
    }
    callback[0].style.transition = '0.8s'
    closeMenu()
  })

  callbackClose[1].addEventListener('click', function () {
    callback[1].style.display = 'none'
    body.style.opacity = 1
    header.style.opacity = 1
    if (windowInnerWidth > 767) {
      callback[1].style.transform = 'translateX(440px)'
    } else {
      callback[1].style.transform = 'translateX(320px)'
    }
    if (windowInnerWidth > 1439) {
      menu.style.opacity = 1
    }
    callback[1].style.transition = '0.8s'
    closeMenu()
  })
}
