/**
 * ----------------------------------------------------------------------------------------
 * Audio
 * ----------------------------------------------------------------------------------------
 */
const mp3BackgroundSong = new Audio('assets/song/BackgroundSong.mp3')
const clickButton = new Audio('assets/song/ClickButton.wav')
const mp3Punch = new Audio('assets/song/Punch.mp3')
const mp3Battle = new Audio('assets/song/Battle.mp3')
const mp3YouWin = new Audio('assets/song/YouWin.mp3')

mp3BackgroundSong.loop = 'loop'

mp3BackgroundSong.volume = 0.01
clickButton.volume = 0.05
mp3Battle.volume = 0.1
mp3Punch.volume = 0.1
mp3YouWin.volume = 0.1

/**
 * ----------------------------------------------------------------------------------------
 * Variables
 * ----------------------------------------------------------------------------------------
 */
/*Equips*/
const heroEquips = {
  heroHELMET: 1,
  heroARMOR: 1,
  heroBOOTS: 1,
  heroWEAPON: 1,
  heroSHIELD: 1,
  heroRING: 1
}

/*Knight*/
const knightStatus = {
  knightHP: 100,
  knightATT: 10,
  knightDEF: 10,
  knightCOIN: 10
}
const knightAttributes = {
  knightSTR: 1,
  knightINT: 1,
  knightDEX: 1,
  knightVIT: 1
}

/*Archer*/
const archerStatus = {
  archerHP: 100,
  archerATT: 10,
  archerDEF: 10,
  archerCOIN: 10
}

const archerAttributes = {
  archerSTR: 1,
  archerINT: 1,
  archerDEX: 1,
  archerVIT: 1
}

/*Assassin*/
const assassinStatus = {
  assassinHP: 100,
  assassinATT: 10,
  assassinDEF: 10,
  assassinCOIN: 10
}

const assassinAttributes = {
  assassinSTR: 1,
  assassinINT: 1,
  assassinDEX: 1,
  assassinVIT: 1
}

/*Mage*/
const mageStatus = {
  mageHP: 100,
  mageATT: 10,
  mageDEF: 10,
  mageCOIN: 10
}

const mageAttributes = {
  mageSTR: 1,
  mageINT: 1,
  mageDEX: 1,
  mageVIT: 1
}

/*Goblin*/
const goblinStatus = {
  goblinHP: 100
}
const skeletonStatus = {
  skeletonHP: 150
}

/**
 * ----------------------------------------------------------------------------------------
 * Page1 NEWGAME
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page1 = document.querySelector('#MobilePage1')
const newgame = document.querySelector('#MobilePage1 .btn-newgame')

newgame.addEventListener('click', function () {
  page1.classList.toggle('show')
  page2.classList.toggle('show')
  clickButton.play()
  mp3BackgroundSong.play()
})

/**
 * ----------------------------------------------------------------------------------------
 * Page2 LOGIN
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page2 = document.querySelector('#MobilePage2')
const btnenter = document.querySelector('#MobilePage2 .btn-enter')
const login = document.querySelector('#Login')
const password = document.querySelector('#Password')

btnenter.addEventListener('click', function () {
  if (
    (login.value === '' && password.value === '') ||
    (login.value === 'lang' && password.value === '1234') ||
    (login.value === 'jones' && password.value === '1234')
  ) {
    page2.classList.toggle('show')
    page3.classList.toggle('show')
    clickButton.play()
  } else {
    login.value = 'Incorrect'
    password.value = 'Incorrect'
  }
})

/**
 * ----------------------------------------------------------------------------------------
 * Page3 CHOOSE
 * ----------------------------------------------------------------------------------------
 */

/* Change Page*/
const page3 = document.querySelector('#MobilePage3')
const btnknight = document.querySelector('#MobilePage3 .btn-knight')
const btnarcher = document.querySelector('#MobilePage3 .btn-archer')
const btnassassin = document.querySelector('#MobilePage3 .btn-assassin')
const btnmage = document.querySelector('#MobilePage3 .btn-mage')
const back3 = document.querySelector('#MobilePage3 footer .btn-back')
const imghero4 = document.querySelector('#MobilePage4 .img-hero')
const imghero5 = document.querySelector('#MobilePage5 .img-hero')

btnknight.addEventListener('click', () => {
  chooseHeroFunction()
  knightImg()
  knightStatusAttributes()
})
btnarcher.addEventListener('click', () => {
  chooseHeroFunction()
  archertImg()
  archerStatusAttributes()
})
btnassassin.addEventListener('click', () => {
  chooseHeroFunction()
  assassinImg()
  assassinStatusAttributes()
})
btnmage.addEventListener('click', () => {
  chooseHeroFunction()
  mageImg()
  mageStatusAttributes()
})

back3.addEventListener('click', function () {
  page3.classList.toggle('show')
  page2.classList.toggle('show')
  clickButton.play()
})

function chooseHeroFunction() {
  page3.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
}

/* Change Image Hero*/
function knightImg() {
  imghero4.src = 'assets/image/Knight.svg'
  imghero5.src = 'assets/image/Knight.svg'
}
function archertImg() {
  imghero4.src = 'assets/image/Archer.svg'
  imghero5.src = 'assets/image/Archer.svg'
}
function assassinImg() {
  imghero4.src = 'assets/image/Assassin.svg'
  imghero5.src = 'assets/image/Assassin.svg'
}
function mageImg() {
  imghero4.src = 'assets/image/Mage.svg'
  imghero5.src = 'assets/image/Mage.svg'
}

const herohp3 = document.querySelector('#MobilePage5 .heroHP')
const heroatt3 = document.querySelector('#MobilePage5 .heroATT')
const herodef3 = document.querySelector('#MobilePage5 .heroDEF')
const herocoin3 = document.querySelector('#MobilePage5 .heroCOIN')

const herostr = document.querySelector('#MobilePage7 .heroSTR')
const heroint = document.querySelector('#MobilePage7 .heroINT')
const herodex = document.querySelector('#MobilePage7 .heroDEX')
const herovit = document.querySelector('#MobilePage7 .heroVIT')

/*Put Hero Status and Attributes*/
function knightStatusAttributes() {
  herohp3.innerHTML = `${knightStatus.knightHP}`
  heroatt3.innerHTML = `${knightStatus.knightATT}`
  herodef3.innerHTML = `${knightStatus.knightDEF}`
  herocoin3.innerHTML = `${knightStatus.knightCOIN}`
  herostr.innerHTML = `${knightAttributes.knightSTR}`
  heroint.innerHTML = `${knightAttributes.knightINT}`
  herodex.innerHTML = `${knightAttributes.knightDEX}`
  herovit.innerHTML = `${knightAttributes.knightVIT}`
}

function archerStatusAttributes() {
  herohp3.innerHTML = `${archerStatus.archerHP}`
  heroatt3.innerHTML = `${archerStatus.archerATT}`
  herodef3.innerHTML = `${archerStatus.archerDEF}`
  herocoin3.innerHTML = `${archerStatus.archerCOIN}`
  herostr.innerHTML = `${archerAttributes.archerSTR}`
  heroint.innerHTML = `${archerAttributes.archerINT}`
  herodex.innerHTML = `${archerAttributes.archerDEX}`
  herovit.innerHTML = `${archerAttributes.archerVIT}`
}
function assassinStatusAttributes() {
  herohp3.innerHTML = `${assassinStatus.assassinHP}`
  heroatt3.innerHTML = `${assassinStatus.assassinATT}`
  herodef3.innerHTML = `${assassinStatus.assassinDEF}`
  herocoin3.innerHTML = `${assassinStatus.assassinCOIN}`
  herostr.innerHTML = `${assassinAttributes.assassinSTR}`
  heroint.innerHTML = `${assassinAttributes.assassinINT}`
  herodex.innerHTML = `${assassinAttributes.assassinDEX}`
  herovit.innerHTML = `${assassinAttributes.assassinVIT}`
}
function mageStatusAttributes() {
  herohp3.innerHTML = `${mageStatus.mageHP}`
  heroatt3.innerHTML = `${mageStatus.mageATT}`
  herodef3.innerHTML = `${mageStatus.mageDEF}`
  herocoin3.innerHTML = `${mageStatus.mageCOIN}`
  herostr.innerHTML = `${mageAttributes.mageSTR}`
  heroint.innerHTML = `${mageAttributes.mageINT}`
  herodex.innerHTML = `${mageAttributes.mageDEX}`
  herovit.innerHTML = `${mageAttributes.mageVIT}`
}

/**
 * ----------------------------------------------------------------------------------------
 * Page4 HERO
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page4 = document.querySelector('#MobilePage4')
const status4 = document.querySelector('#MobilePage4 .btn-status')
const equips4 = document.querySelector('#MobilePage4 .btn-equips')
const attributes4 = document.querySelector('#MobilePage4 .btn-attributes')
const nivel4 = document.querySelector('#MobilePage4 .btn-nivel')
const reset4 = document.querySelector('#MobilePage4 footer .btn-reset')

status4.addEventListener('click', function () {
  page4.classList.toggle('show')
  page5.classList.toggle('show')
  clickButton.play()
})

equips4.addEventListener('click', function () {
  page4.classList.toggle('show')
  page6.classList.toggle('show')
  clickButton.play()
})

attributes4.addEventListener('click', function () {
  page4.classList.toggle('show')
  page7.classList.toggle('show')
  clickButton.play()
})

let nivelCount = 2
nivel4.addEventListener('click', function () {
  if (nivelCount === 2) {
    page4.classList.toggle('show')
    page8.classList.toggle('show')
    nivel4.innerHTML = 'NIVEL2'
    clickButton.play()
  }
  if (nivelCount === 3) {
    page4.classList.toggle('show')
    page9.classList.toggle('show')
    nivel4.innerHTML = 'NIVEL3'
    clickButton.play()
  }
  nivelCount += 1
})

reset4.addEventListener('click', function () {
  location.reload()
})

/**
 * ----------------------------------------------------------------------------------------
 * Page5 STATUS
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page5 = document.querySelector('#MobilePage5')
const back5 = document.querySelector('#MobilePage5 footer .btn-back')

back5.addEventListener('click', function () {
  page5.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
})

/**
 * ----------------------------------------------------------------------------------------
 * Page6 EQUIPS
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page6 = document.querySelector('#MobilePage6')
const back6 = document.querySelector('#MobilePage6 footer .btn-back')

back6.addEventListener('click', function () {
  page6.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
})

/* Esquips Upgrade*/
const btnhelmet = document.querySelector('#MobilePage6 .btn-helmet')
const btnweapon = document.querySelector('#MobilePage6 .btn-weapon')
const btnarmor = document.querySelector('#MobilePage6 .btn-armor')
const btnshield = document.querySelector('#MobilePage6 .btn-shield')
const btnboots = document.querySelector('#MobilePage6 .btn-boots')
const btnring = document.querySelector('#MobilePage6 .btn-ring')

btnhelmet.addEventListener('click', helmetUpgrade)
btnweapon.addEventListener('click', weaponUpgrade)
btnarmor.addEventListener('click', armorUpgrade)
btnshield.addEventListener('click', shieldUpgrade)
btnboots.addEventListener('click', bootsUpgrade)
btnring.addEventListener('click', ringUpgrade)

const herohelmet = document.querySelector('#MobilePage6 .heroHELMET')
const heroweapon = document.querySelector('#MobilePage6 .heroWEAPON')
const heroarmor = document.querySelector('#MobilePage6 .heroARMOR')
const heroshield = document.querySelector('#MobilePage6 .heroSHIELD')
const heroboots = document.querySelector('#MobilePage6 .heroBOOTS')
const heroring = document.querySelector('#MobilePage6 .heroRING')

function helmetUpgrade() {
  if (heroEquips.heroHELMET === 1) {
    herohelmet.style.background = 'var(--color09)'
  }
  if (heroEquips.heroHELMET === 2) {
    herohelmet.style.background = 'var(--color10)'
  }
  if (heroEquips.heroHELMET == 3) {
    herohelmet.style.background = 'var(--color11)'
  }
  clickButton.play()
  heroEquips.heroHELMET += 1
}
function weaponUpgrade() {
  if (heroEquips.heroWEAPON === 1) {
    heroweapon.style.background = 'var(--color09)'
  }
  if (heroEquips.heroWEAPON === 2) {
    heroweapon.style.background = 'var(--color10)'
  }
  if (heroEquips.heroWEAPON == 3) {
    heroweapon.style.background = 'var(--color11)'
  }
  clickButton.play()
  heroEquips.heroWEAPON += 1
}
function armorUpgrade() {
  if (heroEquips.heroARMOR === 1) {
    heroarmor.style.background = 'var(--color09)'
  }
  if (heroEquips.heroARMOR === 2) {
    heroarmor.style.background = 'var(--color10)'
  } else if (heroEquips.heroARMOR == 3) {
    heroarmor.style.background = 'var(--color11)'
  }
  clickButton.play()
  heroEquips.heroARMOR += 1
}
function shieldUpgrade() {
  if (heroEquips.heroSHIELD === 1) {
    heroshield.style.background = 'var(--color09)'
  }
  if (heroEquips.heroSHIELD === 2) {
    heroshield.style.background = 'var(--color10)'
  } else if (heroEquips.heroSHIELD == 3) {
    heroshield.style.background = 'var(--color11)'
  }
  clickButton.play()
  heroEquips.heroSHIELD += 1
}
function bootsUpgrade() {
  if (heroEquips.heroBOOTS === 1) {
    heroboots.style.background = 'var(--color09)'
  }
  if (heroEquips.heroBOOTS === 2) {
    heroboots.style.background = 'var(--color10)'
  } else if (heroEquips.heroBOOTS == 3) {
    heroboots.style.background = 'var(--color11)'
  }
  clickButton.play()
  heroEquips.heroBOOTS += 1
}
function ringUpgrade() {
  if (heroEquips.heroRING === 1) {
    heroring.style.background = 'var(--color09)'
  }
  if (heroEquips.heroRING === 2) {
    heroring.style.background = 'var(--color10)'
  } else if (heroEquips.heroRING == 3) {
    heroring.style.background = 'var(--color11)'
  }
  clickButton.play()
  heroEquips.heroRING += 1
}

/**
 * ----------------------------------------------------------------------------------------
 * Page7 ATTRIBUTES
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page7 = document.querySelector('#MobilePage7')
const back7 = document.querySelector('#MobilePage7 footer .btn-back')

back7.addEventListener('click', function () {
  page7.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
})

/**
 * ----------------------------------------------------------------------------------------
 * Page08 FIGHT
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page8 = document.querySelector('#MobilePage8')
const fight8 = document.querySelector('#MobilePage8 footer .btn-fight')
const upgrade8 = document.querySelector('#MobilePage8 footer .btn-upgrade')
const herocoin8 = document.querySelector('#MobilePage8 .heroCOIN')
const herohp8 = document.querySelector('#MobilePage8 .heroHP')
const goblinhp8 = document.querySelector('#MobilePage8 .goblinHP')

let clickFight1 = 1
fight8.addEventListener('click', function () {
  if (clickFight1 === 1) {
    herocoin8.innerHTML = `${knightStatus.knightCOIN}`
    herohp8.innerHTML = `${knightStatus.knightHP}`
    goblinhp8.innerHTML = `${goblinStatus.goblinHP}`
    fight8.classList.toggle('hidden')
    mp3Battle.play()
  }
  clickFight1 += 1
})

upgrade8.addEventListener('click', function () {
  page8.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
})

/* Fight*/
const imggoblin8 = document.querySelector('#MobilePage8 .img-goblin')
const infattack8 = document.querySelector('#MobilePage8 .inf-attack')

imggoblin8.addEventListener('click', function () {
  if (clickFight1 === 2 && goblinStatus.goblinHP > 0) {
    goblinStatus.goblinHP -= 10
    knightStatus.knightHP -= 5
    goblinhp8.innerText = `${goblinStatus.goblinHP}`
    herohp8.innerText = `${knightStatus.knightHP}`
    mp3Punch.play()
  }
  if (goblinStatus.goblinHP === 0) {
    goblinStatus.goblinHP = 'Defeat'
    imggoblin8.src = 'assets/image/GoblinDead.svg'
    imggoblin8.style.transform = 'translateY(60px)'

    knightStatus.knightCOIN += 50
    herocoin8.innerHTML = `${knightStatus.knightCOIN}`
    infattack8.innerHTML = 'WIN'
    upgrade8.classList.toggle('hidden')

    mp3Battle.pause()
    mp3Battle.currentTime = 0
    mp3YouWin.play()
  }
})

/**
 * ----------------------------------------------------------------------------------------
 * Page09 FIGHT2
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page9 = document.querySelector('#MobilePage9')
const fight9 = document.querySelector('#MobilePage9 footer .btn-fight')
const upgrade9 = document.querySelector('#MobilePage9 footer .btn-upgrade')
const herocoin9 = document.querySelector('#MobilePage9 .heroCOIN')
const herohp9 = document.querySelector('#MobilePage9 .heroHP')
const skeletonhp9 = document.querySelector('#MobilePage9 .skeletonHP')

let clickFight2 = 1

fight9.addEventListener('click', function () {
  if (clickFight2 === 1) {
    herocoin9.innerHTML = `${knightStatus.knightCOIN}`
    herohp9.innerHTML = `${knightStatus.knightHP}`
    skeletonhp9.innerHTML = `${skeletonStatus.skeletonHP}`
    fight9.classList.toggle('hidden')
    mp3Battle.play()
  }
  clickFight2 += 1
})

upgrade9.addEventListener('click', function () {
  page9.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
})

/* Fight*/
const imgskeleton9 = document.querySelector('#MobilePage9 .img-skeleton')
const infattack9 = document.querySelector('#MobilePage9 .inf-attack')

imgskeleton9.addEventListener('click', function () {
  if (clickFight2 === 2 && skeletonStatus.skeletonHP > 0) {
    skeletonStatus.skeletonHP -= 10
    knightStatus.knightHP -= 5
    skeletonhp9.innerText = `${skeletonStatus.skeletonHP}`
    herohp9.innerText = `${knightStatus.knightHP}`
    mp3Punch.play()
  }
  if (skeletonStatus.skeletonHP === 0) {
    skeletonStatus.skeletonHP = 'Defeat'
    imgskeleton9.src = 'assets/image/SkeletonDead.svg'
    imgskeleton9.style.transform = 'translateY(50px)'

    knightStatus.knightCOIN += 50
    herocoin9.innerHTML = `${knightStatus.knightCOIN}`
    infattack9.innerHTML = 'WIN'
    upgrade9.classList.toggle('hidden')
    mp3Battle.pause()
    mp3Battle.currentTime = 0
    mp3YouWin.play()
  }
})
