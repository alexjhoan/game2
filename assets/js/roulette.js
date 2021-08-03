let timerId
function rouletteDimer(time) {
  timerId = setTimeout(() => {
    $('#RouletteTooltip').show()
  }, time);
}

function spinner() {
  $("#rouletteSpin").prop("disabled", true);

  const x = -1000
  const y = -3000

  const deg = Math.floor(Math.random() * (x - y)) + y
  const trunk = Math.floor(deg/360)
  const numero = deg - trunk * 360

  setTimeout(() => {
    $("#rouletteSpin").removeAttr("disabled");
  }, 6500);

  $('.contanerRoulette').css('transform', 'rotate('+deg+'deg)')
  setTimeout(() => {
    $('.contanerRoulette').css('transition', 'none')
    setTimeout(() => {
      $('.contanerRoulette').css('transform', 'rotate('+numero+'deg)')
    }, 80);
  }, 2900);

  if (numero > 30 && numero <= 90) {
    varGame.numberRoulette = 6
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(60deg)')
    }, 3015);
  } else if (numero > 90 && numero <= 150) {
    varGame.numberRoulette = 5
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(120deg)')
    }, 3015);
  } else if (numero > 150 && numero <= 210) {
    varGame.numberRoulette = 4
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(180deg)')
    }, 3015);
  } else if (numero > 210 && numero <= 270) {
    varGame.numberRoulette = 3
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(240deg)')
    }, 3015);
  } else if (numero > 270 && numero <= 330) {
    varGame.numberRoulette = 2
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(300deg)')
    }, 3015);
  } else if (numero > 330 && numero <= 360) {
    varGame.numberRoulette = 1
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(360deg)')
    }, 3015);
  } else if (numero > 0 && numero <= 30) {
    varGame.numberRoulette = 1
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(0deg)')
    }, 3015);
  }

  if ((varGame.avatarPosition+varGame.numberRoulette) < gameBox.length) {
    varGame.avatarPosition = varGame.numberRoulette + varGame.avatarPosition
    setTimeout(() => {
      viewCard(viewCardColor, gameBox[varGame.avatarPosition -1])
    }, varGame.numberRoulette*1000 + 3300);
  } else {
    varGame.avatarPosition = 41
    setTimeout(() => {
      $("#rouletteSpin").prop("disabled", true);
    }, 6510);
    setTimeout(() => {
      nextMemory()
    }, (41 - varGame.oldAvatarPosition)*1000 + 3800);
  }

  let viewCardColor

  if (gameBox[varGame.avatarPosition -1] === 0 ) {
    viewCardColor = 'blueCard'
  } else if (gameBox[varGame.avatarPosition -1] === 1 ) {
    viewCardColor = 'cianCard'
  } else if (gameBox[varGame.avatarPosition -1] === 2 ) {
    viewCardColor = 'greenCard'
  } else if (gameBox[varGame.avatarPosition -1] === 3 ) {
    viewCardColor = 'redCard'
  } else if (gameBox[varGame.avatarPosition -1] === 4 ) {
    viewCardColor = 'yellowCard'
  }

  $('#RouletteTooltip').hide()
  clearTimeout(timerId);

  setTimeout(() => {
    moveAvatar(varGame.avatarPosition)
  }, 3000);
}
