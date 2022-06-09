/**
 * ----------------------------------------------------------------------------------------
 * Page1
 * ----------------------------------------------------------------------------------------
 */
const page1 = document.querySelector('#MobilePage1')
const newgame = document.querySelector('#MobilePage1 .newgame')

newgame.addEventListener('click', function () {
  page1.classList.toggle('hidden')
  page2.classList.toggle('show')
})

/**
 * ----------------------------------------------------------------------------------------
 * Page2
 * ----------------------------------------------------------------------------------------
 */
const page2 = document.querySelector('#MobilePage2')
const btnknight = document.querySelector('#MobilePage2 .btn-knight')
const back2 = document.querySelector('#MobilePage2 footer .back')

btnknight.addEventListener('click', function () {
  page2.classList.toggle('hidden')
  page3.classList.toggle('show')
})
back2.addEventListener('click', function () {
  page2.classList.toggle('show')
  page1.classList.toggle('hidden')
})
/**
 * ----------------------------------------------------------------------------------------
 * Page3
 * ----------------------------------------------------------------------------------------
 */
const page3 = document.querySelector('#MobilePage3')
const next3 = document.querySelector('#MobilePage3 footer .next')
const back3 = document.querySelector('#MobilePage3 footer .back')

next3.addEventListener('click', function () {
  page3.classList.toggle('hidden')
  page4.classList.toggle('show')
})
back3.addEventListener('click', function () {
  page3.classList.toggle('show')
})

/**
 * ----------------------------------------------------------------------------------------
 * Page4
 * ----------------------------------------------------------------------------------------
 */
const page4 = document.querySelector('#MobilePage4')
const next4 = document.querySelector('#MobilePage4 footer .next')
const back4 = document.querySelector('#MobilePage4 footer .back')

next4.addEventListener('click', function () {
  page4.classList.toggle('hidden')
  page5.classList.toggle('show')
})
back4.addEventListener('click', function () {
  page4.classList.toggle('show')
})

/**
 * ----------------------------------------------------------------------------------------
 * Page5
 * ----------------------------------------------------------------------------------------
 */
const page5 = document.querySelector('#MobilePage5')
const back5 = document.querySelector('#MobilePage5 footer .back')

back5.addEventListener('click', function () {
  page5.classList.toggle('show')
})
