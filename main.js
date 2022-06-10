/**
 * ----------------------------------------------------------------------------------------
 * Page1
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
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
/* Change page*/
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

/* Change page*/
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

const btnhelmet = document.querySelector('#btn-helmet')
const btnarmor = document.querySelector('#btn-armor')
const btnboots = document.querySelector('#btn-boots')
const btnweapon = document.querySelector('#btn-weapon')
const btnshield = document.querySelector('#btn-shield')
const btnring = document.querySelector('#btn-ring')

btnhelmet.addEventListener('click', helmetFunction)
btnarmor.addEventListener('click', armorFunction)
btnboots.addEventListener('click', bootsFunction)
btnweapon.addEventListener('click', weaponFunction)
btnshield.addEventListener('click', shieldFunction)
btnring.addEventListener('click', ringFunction)

let helmetclick = 0
let armorclick = 0
let bootsclick = 0
let weaponclick = 0
let shieldclick = 0
let ringclick = 0

function helmetFunction() {
  helmetclick += 1
  if (helmetclick == 1) {
    imghelmet.style.background = 'var(--color09)'
  }
  if (helmetclick == 2) {
    imghelmet.style.background = 'var(--color10)'
  }
  if (helmetclick == 3) {
    imghelmet.style.background = 'var(--color11)'
  }
  if (helmetclick == 4) {
    imghelmet.style.background = 'var(--color12)'
  }
  if (helmetclick == 5) {
    imghelmet.style.background = 'var(--color13)'
  }
  if (helmetclick == 6) {
    imghelmet.style.background = 'var(--color14)'
  }
}
function armorFunction() {
  armorclick += 1
  if (armorclick == 1) {
    imgarmor.style.background = 'var(--color09)'
  }
  if (armorclick == 2) {
    imgarmor.style.background = 'var(--color10)'
  }
  if (armorclick == 3) {
    imgarmor.style.background = 'var(--color11)'
  }
  if (armorclick == 4) {
    imgarmor.style.background = 'var(--color12)'
  }
  if (armorclick == 5) {
    imgarmor.style.background = 'var(--color13)'
  }
  if (armorclick == 6) {
    imgarmor.style.background = 'var(--color14)'
  }
}
function bootsFunction() {
  bootsclick += 1
  if (bootsclick == 1) {
    imgboots.style.background = 'var(--color09)'
  }
  if (bootsclick == 2) {
    imgboots.style.background = 'var(--color10)'
  }
  if (bootsclick == 3) {
    imgboots.style.background = 'var(--color11)'
  }
  if (bootsclick == 4) {
    imgboots.style.background = 'var(--color12)'
  }
  if (bootsclick == 5) {
    imgboots.style.background = 'var(--color13)'
  }
  if (bootsclick == 6) {
    imgboots.style.background = 'var(--color14)'
  }
}
function weaponFunction() {
  weaponclick += 1
  if (weaponclick == 1) {
    imgweapon.style.background = 'var(--color09)'
  }
  if (weaponclick == 2) {
    imgweapon.style.background = 'var(--color10)'
  }
  if (weaponclick == 3) {
    imgweapon.style.background = 'var(--color11)'
  }
  if (weaponclick == 4) {
    imgweapon.style.background = 'var(--color12)'
  }
  if (weaponclick == 5) {
    imgweapon.style.background = 'var(--color13)'
  }
  if (weaponclick == 6) {
    imgweapon.style.background = 'var(--color14)'
  }
}
function shieldFunction() {
  shieldclick += 1
  if (shieldclick == 1) {
    imgshield.style.background = 'var(--color09)'
  }
  if (shieldclick == 2) {
    imgshield.style.background = 'var(--color10)'
  }
  if (shieldclick == 3) {
    imgshield.style.background = 'var(--color11)'
  }
  if (shieldclick == 4) {
    imgshield.style.background = 'var(--color12)'
  }
  if (shieldclick == 5) {
    imgshield.style.background = 'var(--color13)'
  }
  if (shieldclick == 6) {
    imgshield.style.background = 'var(--color14)'
  }
}
function ringFunction() {
  ringclick += 1
  if (ringclick == 1) {
    imgring.style.background = 'var(--color09)'
  }
  if (ringclick == 2) {
    imgring.style.background = 'var(--color10)'
  }
  if (ringclick == 3) {
    imgring.style.background = 'var(--color11)'
  }
  if (ringclick == 4) {
    imgring.style.background = 'var(--color12)'
  }
  if (ringclick == 5) {
    imgring.style.background = 'var(--color13)'
  }
  if (ringclick == 6) {
    imgring.style.background = 'var(--color14)'
  }
}

/**
 * ----------------------------------------------------------------------------------------
 * Page4
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
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

/* Upgrade Status */
const btnstr = document.querySelector('#btn-str')
const btnint = document.querySelector('#btn-int')
const btndex = document.querySelector('#btn-dex')
const btnvit = document.querySelector('#btn-vit')
const btncoin = document.querySelector('#btn-coin')
const btnlife = document.querySelector('#btn-life')

btnstr.addEventListener('click', strFunction)
btnint.addEventListener('click', intFunction)
btndex.addEventListener('click', dexFunction)
btnvit.addEventListener('click', vitFunction)
btncoin.addEventListener('click', coinFunction)
btnlife.addEventListener('click', lifeFunction)

let strclick = 0
let intclick = 0
let dexclick = 0
let vitclick = 0
let coinclick = 0
let lifeclick = 0

function strFunction() {
  strclick += 1
  if (strclick == 1) {
    document.getElementById('sstr').innerHTML = 02
  }
  if (strclick == 2) {
    document.getElementById('sstr').innerHTML = 03
  }
  if (strclick == 3) {
    document.getElementById('sstr').innerHTML = 04
  }
  if (strclick == 4) {
    document.getElementById('sstr').innerHTML = 05
  }
}
function intFunction() {
  intclick += 1
  if (intclick == 1) {
    document.getElementById('sint').innerHTML = 02
  }
  if (intclick == 2) {
    document.getElementById('sint').innerHTML = 03
  }
  if (intclick == 3) {
    document.getElementById('sint').innerHTML = 04
  }
  if (intclick == 4) {
    document.getElementById('sint').innerHTML = 05
  }
}
function dexFunction() {
  dexclick += 1
  if (dexclick == 1) {
    document.getElementById('sdex').innerHTML = 02
  }
  if (dexclick == 2) {
    document.getElementById('sdex').innerHTML = 03
  }
  if (dexclick == 3) {
    document.getElementById('sdex').innerHTML = 04
  }
  if (dexclick == 4) {
    document.getElementById('sdex').innerHTML = 05
  }
}
function vitFunction() {
  vitclick += 1
  if (vitclick == 1) {
    document.getElementById('svit').innerHTML = 02
  }
  if (vitclick == 2) {
    document.getElementById('svit').innerHTML = 03
  }
  if (vitclick == 3) {
    document.getElementById('svit').innerHTML = 04
  }
  if (vitclick == 4) {
    document.getElementById('svit').innerHTML = 05
  }
}
function coinFunction() {
  coinclick += 1
  if (coinclick == 1) {
    document.getElementById('scoin').innerHTML = 02
  }
  if (coinclick == 2) {
    document.getElementById('scoin').innerHTML = 03
  }
  if (coinclick == 3) {
    document.getElementById('scoin').innerHTML = 04
  }
  if (coinclick == 4) {
    document.getElementById('scoin').innerHTML = 05
  }
}
function lifeFunction() {
  btnlife.style.background = 'var(--color01)'
}

/**
 * ----------------------------------------------------------------------------------------
 * Page5
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page5 = document.querySelector('#MobilePage5')
const next5 = document.querySelector('#MobilePage5 footer .next')
const back5 = document.querySelector('#MobilePage5 footer .back')

next5.addEventListener('click', function () {
  page5.classList.toggle('hidden')
  page6.classList.toggle('show')
})
back5.addEventListener('click', function () {
  page5.classList.toggle('show')
})
/**
 * ----------------------------------------------------------------------------------------
 * Page6
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page6 = document.querySelector('#MobilePage6')
const back6 = document.querySelector('#MobilePage6 footer .back')

back6.addEventListener('click', function () {
  page6.classList.toggle('show')
})

/* Attack Monster*/
const goblinHurt = document.querySelector('#Goblin')
const goblinLife = document.querySelector('#GoblinLife')
let goblinLife1 = 500
const btn = document.querySelector('#Goblin')

btn.addEventListener('mousedown', function () {
  goblinHurt.src = 'assets/image/GoblinHurt.svg'
})

btn.addEventListener('mouseup', function () {
  goblinHurt.src = 'assets/image/Goblin.svg'
})

/* Damage Life*/
btn.addEventListener('click', function () {
  if (goblinLife1 !== 0) {
    goblinLife1 -= 10
    let i = `${goblinLife1}`
    goblinLife.innerText = `${i}`
  } else {
    goblinHurt.src = 'assets/image/GoblinDead.svg'
    goblinLife.innerText = '0'
  }
})
