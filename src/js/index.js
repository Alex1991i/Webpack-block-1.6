import '../scss/style.scss'

const windowInnerWidth = window.innerWidth

if (windowInnerWidth < 768) {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    spaceBetween: 20
  })
}

function resizesSlide() {
  const windowInnerWidth = window.innerWidth
  let slidesLength = document.querySelectorAll('.brands__item')

  for (let i = 0; i < slidesLength.length; i++) {
    if (windowInnerWidth < 768 || windowInnerWidth > 1020) {
      slidesLength[i].style.width = 240 + 'px'
    } else {
      slidesLength[i].style.width = 220 + 'px'
    }
  }
}
resizesSlide()

function resizesSlide2() {
  const windowInnerWidth = window.innerWidth
  let slidesLength = document.querySelectorAll('.brands__item2')

  for (let i = 0; i < slidesLength.length; i++) {
    if (windowInnerWidth < 768 || windowInnerWidth > 1020) {
      slidesLength[i].style.width = 240 + 'px'
    } else {
      slidesLength[i].style.width = 220 + 'px'
    }
  }
}
resizesSlide2()

let showAllBtn = document.querySelectorAll('.arrow')
let brandsHeight = document.querySelectorAll('.brands__container')

function brandsShowAll(height, text) {
  for (let i = 0; i < showAllBtn.length; i++) {
    brandsHeight[i].style.height = height
    showAllBtn[i].textContent = text
    showAllBtn[i].classList.toggle('arrow')
    showAllBtn[i].classList.toggle('arrow_transform')
  }
}

for (let i = 0; i < showAllBtn.length; i++) {
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
  body.style.opacity = 0.04
  header.style.opacity = 0.04
  menu.style.opacity = 1
  menu.style.top = '-30px'
  menu.style.left = '0px'
})

close.addEventListener('click', function () {
  body.style.opacity = 1
  header.style.opacity = 1
  menu.style.opacity = 0
  menu.style.top = '100px'
})

for (let i = 0; i < callback.length; i++) {
  for (let i = 0; i < telephone.length; i++) {
    telephone[i].addEventListener('click', function () {
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
    })
  }

  for (let i = 0; i < chat.length; i++) {
    chat[i].addEventListener('click', function () {
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
    })
  }

  callbackClose[0].addEventListener('click', function () {
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
  })

  callbackClose[1].addEventListener('click', function () {
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
  })
}
