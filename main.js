/**
 * ----------------------------------------------------------------------------------------
 * Audio
 * ----------------------------------------------------------------------------------------
 */
const mp3BackgroundSong = new Audio('assets/song/BackgroundSong.mp3')
const clickButton = new Audio('assets/song/ClickButton.wav')
const mp3Punch = new Audio('assets/song/Punch.mp3')

mp3BackgroundSong.loop = 'loop'

mp3BackgroundSong.volume = 0.01
clickButton.volume = 0.05
mp3Punch.volume = 0.1
/**
 * ----------------------------------------------------------------------------------------
 * Image
 * ----------------------------------------------------------------------------------------
 */
const monsterImageList = [0, goblinImage, skeletonImage, centaurImage, wolfImage, reaperImage, golemImage, deadknightImage, pirateImage]

function goblinImage() {
  imgmonster.src = 'assets/image/Goblin.svg'
}

function skeletonImage() {
  imgmonster.src = 'assets/image/Skeleton.svg'
}

function centaurImage() {
  imgmonster.src = 'assets/image/Centaur.svg'
}

function wolfImage() {
  imgmonster.src = 'assets/image/Wolf.svg'
}

function reaperImage() {
  imgmonster.src = 'assets/image/Reaper.svg'
}

function golemImage() {
  imgmonster.src = 'assets/image/Golem.svg'
}

function deadknightImage() {
  imgmonster.src = 'assets/image/DeadKnight.svg'
}

function pirateImage() {
  imgmonster.src = 'assets/image/Pirate.svg'
}
/**
 * ----------------------------------------------------------------------------------------
 * Punch Effect
 * ----------------------------------------------------------------------------------------
 */
const monsterPunchList = [0, goblinPunch, skeletonPunch, centaurPunch, wolfPunch, reaperPunch, golemPunch, deathKnightPunch, piratePunch]

function goblinPunch() {
  setTimeout(function () {
    imgmonster.src = 'assets/image/Goblin1.svg'
  }, 0000)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Goblin2.svg'
  }, 0050)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Goblin3.svg'
  }, 0100)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Goblin4.svg'
  }, 0150)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Goblin5.svg'
  }, 0200)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Goblin.svg'
  }, 0250)
}

function skeletonPunch() {
  setTimeout(function () {
    imgmonster.src = 'assets/image/Skeleton1.svg'
  }, 0000)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Skeleton2.svg'
  }, 0050)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Skeleton3.svg'
  }, 0100)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Skeleton4.svg'
  }, 0150)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Skeleton5.svg'
  }, 0200)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Skeleton.svg'
  }, 0250)
}

function centaurPunch() {
  setTimeout(function () {
    imgmonster.src = 'assets/image/Centaur1.svg'
  }, 0000)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Centaur2.svg'
  }, 0050)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Centaur3.svg'
  }, 0100)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Centaur4.svg'
  }, 0150)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Centaur5.svg'
  }, 0200)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Centaur.svg'
  }, 0250)
}

function wolfPunch() {
  setTimeout(function () {
    imgmonster.src = 'assets/image/Wolf1.svg'
  }, 0000)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Wolf2.svg'
  }, 0050)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Wolf3.svg'
  }, 0100)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Wolf4.svg'
  }, 0150)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Wolf5.svg'
  }, 0200)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Wolf.svg'
  }, 0250)
}

function reaperPunch() {
  setTimeout(function () {
    imgmonster.src = 'assets/image/Reaper1.svg'
  }, 0000)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Reaper2.svg'
  }, 0050)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Reaper3.svg'
  }, 0100)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Reaper4.svg'
  }, 0150)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Reaper5.svg'
  }, 0200)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Reaper.svg'
  }, 0250)
}

function golemPunch() {
  setTimeout(function () {
    imgmonster.src = 'assets/image/Golem1.svg'
  }, 0000)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Golem2.svg'
  }, 0050)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Golem3.svg'
  }, 0100)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Golem4.svg'
  }, 0150)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Golem5.svg'
  }, 0200)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Golem.svg'
  }, 0250)
}

function deathKnightPunch() {
  setTimeout(function () {
    imgmonster.src = 'assets/image/DeadKnight1.svg'
  }, 0000)
  setTimeout(function () {
    imgmonster.src = 'assets/image/DeadKnight2.svg'
  }, 0050)
  setTimeout(function () {
    imgmonster.src = 'assets/image/DeadKnight3.svg'
  }, 0100)
  setTimeout(function () {
    imgmonster.src = 'assets/image/DeadKnight4.svg'
  }, 0150)
  setTimeout(function () {
    imgmonster.src = 'assets/image/DeadKnight5.svg'
  }, 0200)
  setTimeout(function () {
    imgmonster.src = 'assets/image/DeadKnight.svg'
  }, 0250)
}

function piratePunch() {
  setTimeout(function () {
    imgmonster.src = 'assets/image/Pirate1.svg'
  }, 0000)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Pirate2.svg'
  }, 0050)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Pirate3.svg'
  }, 0100)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Pirate4.svg'
  }, 0150)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Pirate5.svg'
  }, 0200)
  setTimeout(function () {
    imgmonster.src = 'assets/image/Pirate.svg'
  }, 0250)
}

/**
 * ----------------------------------------------------------------------------------------
 * Status Equips Attributes
 * ----------------------------------------------------------------------------------------
 */
/*Hero*/
const heroStatus = { heroClass: 1, heroHP: 1, heroATT: 1, heroDEF: 1, heroCOIN: 50 }
const heroEquips = { heroHELMET: 1, heroARMOR: 1, heroBOOTS: 1, heroWEAPON: 1, heroSHIELD: 1, heroRING: 1 }
const heroAttributes = { heroSTR: 1, heroINT: 1, heroDEX: 1, heroVIT: 1 }

/*Monster*/
const monsterHPList = [0, 'goblinHP', 'skeletonHP', 'centaurHP', 'wolfHP', 'reaperHP', 'golemHP', 'deadknightP', 'pirateHP']
const monsterStatus = { goblinHP: 100, skeletonHP: 200, centaurHP: 300, wolfHP: 400, reaperHP: 500, golemHP: 600, deadknightP: 700, pirateHP: 1000 }

/*Knight*/
const knightStatus = { knightHP: 100, knightATT: 10, knightDEF: 10, knightCOIN: 50 }
const knightAttributes = { knightSTR: 10, knightINT: 5, knightDEX: 5, knightVIT: 5 }

/*Archer*/
const archerStatus = { archerHP: 100, archerATT: 10, archerDEF: 10, archerCOIN: 10 }
const archerAttributes = { archerSTR: 5, archerINT: 5, archerDEX: 10, archerVIT: 5 }

/*Assassin*/
const assassinStatus = { assassinHP: 100, assassinATT: 10, assassinDEF: 10, assassinCOIN: 50 }
const assassinAttributes = { assassinSTR: 8, assassinINT: 5, assassinDEX: 8, assassinVIT: 5 }

/*Mage*/
const mageStatus = { mageHP: 100, mageATT: 10, mageDEF: 10, mageCOIN: 50 }
const mageAttributes = { mageSTR: 5, mageINT: 10, mageDEX: 5, mageVIT: 5 }
/**
 * ----------------------------------------------------------------------------------------
 * Hero Attack
 * ----------------------------------------------------------------------------------------
 */
const heroAttack = [0, knightAttack, archerAttack, assassinAttack, mageAttack] //heroStatus.hero.Class = 1 = kinight

function knightAttack() {
  let heroAttack = heroEquips.heroWEAPON * heroAttributes.heroSTR * 1.5
  return heroAttack
}

function archerAttack() {
  let heroAttack = heroEquips.heroWEAPON * heroAttributes.heroDEX * 1.5
  return heroAttack
}

function assassinAttack() {
  let heroAttack = heroEquips.heroWEAPON * (heroAttributes.heroSTR * 0.8 + heroAttributes.heroDEX * 0.8)
  return heroAttack
}

function mageAttack() {
  let heroAttack = heroEquips.heroWEAPON * heroAttributes.heroINT * 1.7
  return heroAttack
}
/**
 * ----------------------------------------------------------------------------------------
 * Hero HP
 * ----------------------------------------------------------------------------------------
 */
const heroVitHP = [0, knightVitHP, archerVitHP, assassinVitHP, mageVitHP]

function knightVitHP() {
  let heroVitHP = heroAttributes.heroVIT * 20
  return heroVitHP
}

function archerVitHP() {
  let heroVitHP = heroAttributes.heroVIT * 16
  return heroVitHP
}

function assassinVitHP() {
  let heroVitHP = heroAttributes.heroVIT * 16
  return heroVitHP
}

function mageVitHP() {
  let heroVitHP = heroAttributes.heroVIT * 14
  return heroVitHP
}

/**
 * ----------------------------------------------------------------------------------------
 * Hero Damage (Monster Attack)
 * ----------------------------------------------------------------------------------------
 */
const monsterDamage = [0, monster1, monster2, monster3, monster4, monster5, monster6, monster7, monster8]

const monsterDamageBase = [0, 15, 20, 30, 40, 50, 60, 70, 80]

function monster1() {
  let monsterDamage = Math.round(monsterDamageBase[1] - heroDefense[`${heroStatus.heroClass}`]())
  return monsterDamage
}

function monster2() {
  let monsterDamage = Math.round(monsterDamageBase[2] - heroDefense[`${heroStatus.heroClass}`]())
  return monsterDamage
}

function monster3() {
  let monsterDamage = Math.round(monsterDamageBase[3] - heroDefense[`${heroStatus.heroClass}`]())
  return monsterDamage
}

function monster4() {
  let monsterDamage = Math.round(monsterDamageBase[4] - heroDefense[`${heroStatus.heroClass}`]())
  return monsterDamage
}

function monster5() {
  let monsterDamage = Math.round(monsterDamageBase[5] - heroDefense[`${heroStatus.heroClass}`]())
  return monsterDamage
}

function monster6() {
  let monsterDamage = Math.round(monsterDamageBase[6] - heroDefense[`${heroStatus.heroClass}`]())
  return monsterDamage
}

function monster7() {
  let monsterDamage = Math.round(monsterDamageBase[7] - heroDefense[`${heroStatus.heroClass}`]())
  return monsterDamage
}

function monster8() {
  let monsterDamage = Math.round(monsterDamageBase[8] - heroDefense[`${heroStatus.heroClass}`]())
  return monsterDamage
}

const heroDefense = [0, knightDefense, archerDefense, assassinDefense, mageDefense]

function knightDefense() {
  let knightDefense =
    heroAttributes.heroSTR * 0.7 +
    heroAttributes.heroDEX * 0.3 +
    heroAttributes.heroINT * 0 +
    (heroEquips.heroHELMET + heroEquips.heroARMOR + heroEquips.heroBOOTS + heroEquips.heroSHIELD + heroEquips.heroRING) / 3
  return knightDefense
}

function archerDefense() {
  let archerDefense =
    heroAttributes.heroSTR * 0.7 +
    heroAttributes.heroDEX * 0.3 +
    heroAttributes.heroINT * 0 +
    (heroEquips.heroHELMET + heroEquips.heroARMOR + heroEquips.heroBOOTS + heroEquips.heroSHIELD + heroEquips.heroRING) / 3
  return archerDefense
}

function assassinDefense() {
  let assassinDefense =
    heroAttributes.heroSTR * 0.7 +
    heroAttributes.heroDEX * 0.3 +
    heroAttributes.heroINT * 0 +
    (heroEquips.heroHELMET + heroEquips.heroARMOR + heroEquips.heroBOOTS + heroEquips.heroSHIELD + heroEquips.heroRING) / 3
  return assassinDefense
}

function mageDefense() {
  let mageDefense =
    heroAttributes.heroSTR * 0.7 +
    heroAttributes.heroDEX * 0.3 +
    heroAttributes.heroINT * 0 +
    (heroEquips.heroHELMET + heroEquips.heroARMOR + heroEquips.heroBOOTS + heroEquips.heroSHIELD + heroEquips.heroRING) / 3
  return mageDefense
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
  heroStatusAttributes()
})
btnarcher.addEventListener('click', () => {
  chooseHeroFunction()
  archertImg()
  archerStatusAttributes()
  heroStatusAttributes()
})
btnassassin.addEventListener('click', () => {
  chooseHeroFunction()
  assassinImg()
  assassinStatusAttributes()
  heroStatusAttributes()
})
btnmage.addEventListener('click', () => {
  chooseHeroFunction()
  mageImg()
  mageStatusAttributes()
  heroStatusAttributes()
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
function heroStatusAttributes() {
  herohp3.innerHTML = heroStatus.heroHP
  heroatt3.innerHTML = heroStatus.heroATT
  herodef3.innerHTML = heroStatus.heroDEF
  herocoin3.innerHTML = '$' + heroStatus.heroCOIN
  herostr.innerHTML = heroAttributes.heroSTR
  heroint.innerHTML = heroAttributes.heroINT
  herodex.innerHTML = heroAttributes.heroDEX
  herovit.innerHTML = heroAttributes.heroVIT
}

function knightStatusAttributes() {
  heroStatus.heroClass = 1
  heroStatus.heroHP = knightStatus.knightHP
  heroStatus.heroATT = knightStatus.knightATT
  heroStatus.heroDEF = knightStatus.knightDEF
  heroAttributes.heroSTR = knightAttributes.knightSTR
  heroAttributes.heroINT = knightAttributes.knightINT
  heroAttributes.heroDEX = knightAttributes.knightDEX
  heroAttributes.heroVIT = knightAttributes.knightVIT
}

function archerStatusAttributes() {
  heroStatus.heroClass = 2
  heroStatus.heroHP = archerStatus.archerHP
  heroStatus.heroATT = archerStatus.archerATT
  heroStatus.heroDEF = archerStatus.archerDEF
  heroAttributes.heroSTR = archerAttributes.archerSTR
  heroAttributes.heroINT = archerAttributes.archerINT
  heroAttributes.heroDEX = archerAttributes.archerDEX
  heroAttributes.heroVIT = archerAttributes.archerVIT
}

function assassinStatusAttributes() {
  heroStatus.heroClass = 3
  heroStatus.heroHP = assassinStatus.assassinHP
  heroStatus.heroATT = assassinStatus.assassinATT
  heroStatus.heroDEF = assassinStatus.assassinDEF
  heroAttributes.heroSTR = assassinAttributes.assassinSTR
  heroAttributes.heroINT = assassinAttributes.assassinINT
  heroAttributes.heroDEX = assassinAttributes.assassinDEX
  heroAttributes.heroVIT = assassinAttributes.assassinVIT
}

function mageStatusAttributes() {
  heroStatus.heroClass = 4
  heroStatus.heroHP = mageStatus.mageHP
  heroStatus.heroATT = mageStatus.mageATT
  heroStatus.heroDEF = mageStatus.mageDEF
  heroAttributes.heroSTR = mageAttributes.mageSTR
  heroAttributes.heroINT = mageAttributes.mageINT
  heroAttributes.heroDEX = mageAttributes.mageDEX
  heroAttributes.heroVIT = mageAttributes.mageVIT
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
const btnrestart4 = document.querySelector('#MobilePage4 footer .btn-restart')

status4.addEventListener('click', function () {
  page4.classList.toggle('show')
  page5.classList.toggle('show')
  clickButton.play()
  refreshUpgrades()
})

equips4.addEventListener('click', function () {
  page4.classList.toggle('show')
  page6.classList.toggle('show')
  clickButton.play()
  refreshUpgrades()
})

attributes4.addEventListener('click', function () {
  page4.classList.toggle('show')
  page7.classList.toggle('show')
  clickButton.play()
  refreshUpgrades()
})

nivel4.addEventListener('click', function () {
  page4.classList.toggle('show')
  page8.classList.toggle('show')
  clickButton.play()
  refreshUpgrades()
  herocoin8.innerHTML = '$' + `${heroStatus.heroCOIN}`
  herohp8.innerHTML = `${heroStatus.heroHP}`
  monsterhp8.innerHTML = `${monsterStatus[`${monsterHPList[`${nivelFight}`]}`]}`
})

btnrestart4.addEventListener('click', function () {
  location.reload()
})

/**
 * ----------------------------------------------------------------------------------------
 * Page5 STATUS
 * ----------------------------------------------------------------------------------------
 */
/* Hero Coin */
heroStatus.heroCOIN = 50
const heroCoinList = 50

/* Equips Atributtes Price */
const attributesPrice = 5
const equipsPrice = 15

/* Change page*/
const page5 = document.querySelector('#MobilePage5')
const back5 = document.querySelector('#MobilePage5 footer .btn-back')

back5.addEventListener('click', function () {
  page5.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
})

/* Refresh Upgrades */
function refreshUpgrades() {
  heroStatus.heroATT = heroAttack[`${heroStatus.heroClass}`]()
  heroatt3.innerHTML = Math.round(heroStatus.heroATT)

  heroStatus.heroDEF = heroDefense[`${heroStatus.heroClass}`]()
  herodef3.innerHTML = Math.round(heroStatus.heroDEF)

  heroStatus.heroHP = heroVitHP[`${heroStatus.heroClass}`]()
  herohp3.innerHTML = Math.round(heroStatus.heroHP)

  herocoin3.innerHTML = '$' + Math.round(heroStatus.heroCOIN)

  herocoin6.innerHTML = '$' + Math.round(heroStatus.heroCOIN)
  herocoin7.innerHTML = '$' + Math.round(heroStatus.heroCOIN)
}

/**
 * ----------------------------------------------------------------------------------------
 * Page6 EQUIPS
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const herocoin6 = document.querySelector('#MobilePage6 .heroCOIN')
const equipsPrice6 = document.querySelector('#MobilePage6 .equipsPrice')

herocoin6.innerHTML = '$' + Math.round(heroStatus.heroCOIN)
equipsPrice6.innerHTML = 'PRICE $' + Math.round(equipsPrice)

const page6 = document.querySelector('#MobilePage6')
const back6 = document.querySelector('#MobilePage6 footer .btn-back')

back6.addEventListener('click', function () {
  page6.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
  refreshUpgrades()
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
  if (heroEquips.heroHELMET === 1 && heroStatus.heroCOIN >= equipsPrice) {
    herohelmet.style.background = 'var(--color09)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroHELMET === 2 && heroStatus.heroCOIN >= equipsPrice) {
    herohelmet.style.background = 'var(--color10)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroHELMET === 3 && heroStatus.heroCOIN >= equipsPrice) {
    herohelmet.style.background = 'var(--color11)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  clickButton.play()
  heroEquips.heroHELMET += 1
}
function weaponUpgrade() {
  if (heroEquips.heroWEAPON === 1 && heroStatus.heroCOIN >= equipsPrice) {
    heroweapon.style.background = 'var(--color09)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroWEAPON === 2 && heroStatus.heroCOIN >= equipsPrice) {
    heroweapon.style.background = 'var(--color10)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroWEAPON === 3 && heroStatus.heroCOIN >= attributesPrice) {
    heroweapon.style.background = 'var(--color11)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  clickButton.play()
  heroEquips.heroWEAPON += 1
}
function armorUpgrade() {
  if (heroEquips.heroARMOR === 1 && heroStatus.heroCOIN >= attributesPrice) {
    heroarmor.style.background = 'var(--color09)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroARMOR === 2 && heroStatus.heroCOIN >= attributesPrice) {
    heroarmor.style.background = 'var(--color10)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroARMOR === 3 && heroStatus.heroCOIN >= attributesPrice) {
    heroarmor.style.background = 'var(--color11)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  clickButton.play()
  heroEquips.heroARMOR += 1
}
function shieldUpgrade() {
  if (heroEquips.heroSHIELD === 1 && heroStatus.heroCOIN >= attributesPrice) {
    heroshield.style.background = 'var(--color09)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroSHIELD === 2 && heroStatus.heroCOIN >= attributesPrice) {
    heroshield.style.background = 'var(--color10)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroSHIELD === 3 && heroStatus.heroCOIN >= attributesPrice) {
    heroshield.style.background = 'var(--color11)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  clickButton.play()
  heroEquips.heroSHIELD += 1
}
function bootsUpgrade() {
  if (heroEquips.heroBOOTS === 1 && heroStatus.heroCOIN >= attributesPrice) {
    heroboots.style.background = 'var(--color09)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroBOOTS === 2 && heroStatus.heroCOIN >= attributesPrice) {
    heroboots.style.background = 'var(--color10)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroBOOTS == 3 && heroStatus.heroCOIN >= attributesPrice) {
    heroboots.style.background = 'var(--color11)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  clickButton.play()
  heroEquips.heroBOOTS += 1
}
function ringUpgrade() {
  if (heroEquips.heroRING === 1 && heroStatus.heroCOIN >= attributesPrice) {
    heroring.style.background = 'var(--color09)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroRING === 2 && heroStatus.heroCOIN >= attributesPrice) {
    heroring.style.background = 'var(--color10)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
  }
  if (heroEquips.heroRING == 3 && heroStatus.heroCOIN >= attributesPrice) {
    heroring.style.background = 'var(--color11)'
    heroStatus.heroCOIN -= equipsPrice
    refreshUpgrades()
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
const herocoin7 = document.querySelector('#MobilePage7 .heroCOIN')
herocoin7.innerHTML = '$' + Math.round(heroStatus.heroCOIN)

const attributesPrice7 = document.querySelector('#MobilePage7 .attributesPrice')
attributesPrice7.innerHTML = 'PRICE $' + Math.round(attributesPrice)

const page7 = document.querySelector('#MobilePage7')
const back7 = document.querySelector('#MobilePage7 footer .btn-back')

back7.addEventListener('click', function () {
  page7.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
  refreshUpgrades()
})

const btnstr = document.querySelector('#MobilePage7 .btn-str')
const btnint = document.querySelector('#MobilePage7 .btn-int')
const btndex = document.querySelector('#MobilePage7 .btn-dex')
const btnvit = document.querySelector('#MobilePage7 .btn-vit')

btnstr.addEventListener('click', strUpgrade)
btnint.addEventListener('click', intUpgrade)
btndex.addEventListener('click', dexUpgrade)
btnvit.addEventListener('click', vitUpgrade)

//herocoin3.innerHTML = heroStatus.heroCOIN

function strUpgrade() {
  if (heroStatus.heroCOIN >= attributesPrice) {
    heroAttributes.heroSTR += 1
    herostr.innerHTML = heroAttributes.heroSTR
    heroStatus.heroCOIN -= attributesPrice
    refreshUpgrades()
  }
}
function intUpgrade() {
  if (heroStatus.heroCOIN >= attributesPrice) {
    heroAttributes.heroINT += 1
    heroint.innerHTML = heroAttributes.heroINT
    heroStatus.heroCOIN -= attributesPrice
    refreshUpgrades()
  }
}
function dexUpgrade() {
  if (heroStatus.heroCOIN >= attributesPrice) {
    heroAttributes.heroDEX += 1
    herodex.innerHTML = heroAttributes.heroDEX
    heroStatus.heroCOIN -= attributesPrice
    refreshUpgrades()
  }
}
function vitUpgrade() {
  if (heroStatus.heroCOIN >= attributesPrice) {
    heroAttributes.heroVIT += 1
    herovit.innerHTML = heroAttributes.heroVIT
    heroStatus.heroCOIN -= attributesPrice
    refreshUpgrades()
  }
}

/**
 * ----------------------------------------------------------------------------------------
 * Page08 FIGHT
 * ----------------------------------------------------------------------------------------
 */
/* Change page*/
const page8 = document.querySelector('#MobilePage8')
const fight8 = document.querySelector('#MobilePage8 .btn-fight')
const upgrade8 = document.querySelector('#MobilePage8 .btn-upgrade')
const back8 = document.querySelector('#MobilePage8 footer .btn-back')

const herocoin8 = document.querySelector('#MobilePage8 .heroCOIN')
const herohp8 = document.querySelector('#MobilePage8 .heroHP')

const monsterhp8 = document.querySelector('#MobilePage8 .monsterHP')

const imgmonster = document.querySelector('#MobilePage8 .img-monster')
const infattack8 = document.querySelector('#MobilePage8 .inf-attack')

const btngameover = document.querySelector('#MobilePage8 .btn-gameover')
const btnrestart8 = document.querySelector('#MobilePage8 .btn-restart')

btnrestart8.addEventListener('click', function () {
  location.reload()
})

back8.addEventListener('click', function () {
  page8.classList.toggle('show')
  page4.classList.toggle('show')
  clickButton.play()
})

/* Fight*/

let nivelFight = 1
let clickFight = 1

fight8.addEventListener('click', function () {
  if (clickFight === 1) {
    fight8.classList.toggle('hidden')
    back8.classList.toggle('hidden')
    heroVarHP = heroStatus.heroHP
  }
  clickFight += 1
})
i = imgmonster.addEventListener('click', function () {
  if (clickFight === 2 && monsterStatus[`${monsterHPList[`${nivelFight}`]}`] > 0 && heroVarHP != 0) {
    monsterStatus[`${monsterHPList[`${nivelFight}`]}`] -= heroAttack[`${heroStatus.heroClass}`]()
    heroVarHP -= Math.round(monsterDamage[`${nivelFight}`]())
    monsterhp8.innerText = Math.round(monsterStatus[`${monsterHPList[`${nivelFight}`]}`])

    herohp8.innerText = heroVarHP
    mp3Punch.play()
    monsterPunchList[`${nivelFight}`]()
  }
  if (clickFight === 2 && monsterStatus[`${monsterHPList[`${nivelFight}`]}`] <= 0 && heroVarHP != 0) {
    monsterhp8.innerText = 'Defeat'
    infattack8.innerHTML = 'WIN'
    setTimeout(function () {
      imgmonster.src = 'assets/image/Rip.svg'
    }, 0251)

    heroStatus.heroCOIN += heroCoinList
    herocoin8.innerHTML = '$' + heroStatus.heroCOIN

    upgrade8.classList.toggle('hidden')
    clickFight = 1
  }
  if (heroVarHP <= 0) {
    btngameover.classList.toggle('hidden')
    btnrestart8.classList.toggle('hidden')
  }
})

upgrade8.addEventListener('click', function () {
  page8.classList.toggle('show')
  page4.classList.toggle('show')
  fight8.classList.toggle('hidden')
  upgrade8.classList.toggle('hidden')
  back8.classList.toggle('hidden')
  clickButton.play()
  monsterImageList[`${nivelFight}`]()
  nivelFight += 1
  nivel4.innerHTML = 'NÍVEL ' + [`${nivelFight}`]
  herocoin3.innerHTML = heroStatus.heroCOIN
})
