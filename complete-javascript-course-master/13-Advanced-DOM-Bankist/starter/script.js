'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')
const nav = document.querySelector('.nav')

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab')
  console.log(clicked)

  if (!clicked) return
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  clicked.classList.add('operations__tab--active')

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

const handleHover = function (e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('nav').querySelector('img')
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))

// const obsCallback = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry)
//   })
// }
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// }
// const section1 = document.querySelector('#section--1');
// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)
const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function(entries) {
  const [entry] = entries
  // console.log(entry)
  
  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky') 
}

const headerObserver = new IntersectionObserver(
  stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
  }
)

headerObserver.observe(header)

const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(
  revealSection, {
    root: null,
    threshold: 0.15, 
  })
allSections.forEach(function(section) {
  sectionObserver.observe(section)
  // section.classList.add('section--hidden')
})

const imgTargets = document.querySelectorAll('img[data-src]')
console.log(imgTargets)

const loadImg = function (entries, observer) {
  const [entry] = entries

  if(!entry.isIntersecting) return
  entry.target.src = entry.target.dataset.src
  
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)
}

const imgObsorver = new IntersectionObserver(loadImg,{
  root: null,
  threshold: 0,
  rootMargin: '200px'
})

imgTargets.forEach(img=>imgObsorver.observe(img))

const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')

let curSlide = 0
const maxSlide = slides.length

const slider = document.querySelector('.slider')
slider.style.transform = 'scale(0.5)'
slider.style.overflow = 'visible'

slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`)

btnRight.addEventListener('click', function() {
  if(curSlide === maxSlide -1) {
    curSlide = 0
  } else {
    curSlide++
  }


  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
})