// ------------------init-load---------------------

const getCards = async() => {
  let data = await fetch('components/GameCards.json')
  cards = await data.json()
}

const getAudios = () => {
  soundFlipCardGame = new Audio('assets/sounds/flipcardgame.mp3');
  soundShowCard = new Audio('assets/sounds/chime.mp3');
  soundError = new Audio('assets/sounds/error.mp3');
  soundCorrect = new Audio('assets/sounds/correct.mp3');
  soundMoney = new Audio('assets/sounds/money.mp3');
  soundFlipCardMemory = new Audio('assets/sounds/flipcard.mp3');
  soundTick = new Audio('assets/sounds/tick.mp3');
  soundBlop = new Audio('assets/sounds/blop.mp3');
  soundPig = new Audio('assets/sounds/cash.mp3');
  soundShowCard.playbackRate = 1.2;
  soundFlipCardGame.playbackRate = 0.9;
}

function soundInits() {
  let index = 0
  function soundLoop() {
    if (index < 7) {
      index++
      setTimeout(() => {
        soundBlop.play()
        soundLoop()
      }, 500);
    }
  }
  setTimeout(() => {
    soundLoop()
  }, 1500);
  setTimeout(() => {
    $('#pigInit').removeClass('bounce_In_Down')
    soundMoney.play()
  }, 6000);
}

$(document).ready(function() {
  $('#Start').load('components/Start.html');
  $('#Avatar').load('components/Avatar.html');
  $('#Awards').load('components/Awards.html');
  $('#Game').load('components/Game.html');
  $('#Memory').load('components/MemoryGame.html');
  $('#Store').load('components/Store.html');
  $('#memory').load('components/MemoryGame.html');
  getCards()
  getAudios()
  soundInits()
  setTimeout(() => {
    $('#Cards').load('components/Cards.html');
  }, 300);
  $('body').css('opacity', '1');
  setTimeout(() => {
    $('#loaderContainer').fadeOut()
    $('#cont').show()
  }, 1500);
});

// --------------change-screen-----------

function nextAvatar() {
  $('#Avatar .imgAvatar').load(`assets/icons/${settingChild.gameChild}.svg`);
  $('#Start').hide()
  $('#Avatar').show()
}

function nextAwards() {
  $('#Avatar').hide()
  addMounts()
  $('#Awards .imgAvatar').load(`assets/icons/${settingChild.gameChild}.svg`);
  setTimeout(() => {
    $('#Awards .imgAvatar .hair').attr('fill', settingChild.hair);
    $('#Awards .imgAvatar .skin').attr('fill', settingChild.skin);
    $('#Awards .imgAvatar .shirt').attr('fill', settingChild.clothes.shirt);
    $('#Awards .imgAvatar .pants').attr('fill', settingChild.clothes.pants);
    $(`#Awards .imgAvatar`).show();
    $('#Awards').show()
  }, 80);
}

function nextGame() {
  $('#Awards').hide()
  $('#Roulette').load('components/Roulette.html');
  $('#Game .imgAvatar').load(`assets/icons/${settingChild.gameChild}.svg`);
  soundRouletteLoad()
  setTimeout(() => {
    $('#Game .imgAvatar .hair').attr('fill', settingChild.hair);
    $('#Game .imgAvatar .skin').attr('fill', settingChild.skin);
    $('#Game .imgAvatar .shirt').attr('fill', settingChild.clothes.shirt);
    $('#Game .imgAvatar .pants').attr('fill', settingChild.clothes.pants);
    $('#Game .imgAvatar').show();
    $('#Game').show()
  }, 80);
  $('#Game .mountPig p').text(`Bs. ${(money.pig * money.ceros).toLocaleString()}`);
  $('.containerwhiteribbon .mount span').text((mountAwards[varGame.toWin] * money.ceros).toLocaleString());
  rouletteDimer(6000)
}

function nextMemory() {
  $('#Game').hide()
  $('#Memory').fadeIn()
  welcomeMessage();
  document.getElementById('timer').innerHTML = s;
  loadMemoryCards()
}

function nextStore() {
  $('#Store .imgAvatar').load(`assets/icons/${settingChild.gameChild}.svg`);
  setTimeout(() => {
    $('#Store .imgAvatar .hair').attr('fill', settingChild.hair);
    $('#Store .imgAvatar .skin').attr('fill', settingChild.skin);
    $('#Store .imgAvatar .shirt').attr('fill', settingChild.clothes.shirt);
    $('#Store .imgAvatar .pants').attr('fill', settingChild.clothes.pants);
    $('#Store .imgAvatar').show();
  }, 80);
  messageStore()
}
