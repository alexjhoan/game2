let timerId

function soundRouletteLoad() {
  try{
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    audioContext = new AudioContext()
  }
  catch(e){
    console.log('navegador no compatible con el audio')
  }
}

function soundRoulette() {

  const stopAudio = audioContext.createGain();

  let bandpass = audioContext.createBiquadFilter()
  bandpass.type = "bandpass"
  bandpass.frequency.value = 9e3

  let highpass = audioContext.createBiquadFilter()
  highpass.type = "highpass"
  highpass.frequency.value = 4500

  let lowpass = audioContext.createBiquadFilter()
  lowpass.type = "lowpass"
  lowpass.frequency.value = 2500

  let oscillators = []

  const audios = [2, 3, 4.16, 5.43, 6.79, 8.21]

  audios.forEach((t) => {
    const e = audioContext.createOscillator();
    e.type = "square"
    e.frequency.value = 40 * t
    e.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1)
    oscillators.push(e);
  })
  stopAudio.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.06)
  stopAudio.gain.setValueAtTime(1, audioContext.currentTime)

  oscillators.forEach((t) => t.connect(bandpass))
  bandpass.connect(highpass).connect(lowpass).connect(stopAudio).connect(audioContext.destination);

  oscillators.forEach((t) => {
    t.start(audioContext.currentTime + 0.01)
    t.stop(audioContext.currentTime + 0.07)
  });
}

function tick() {
  soundTick.play()

  // let date = Date.now()

  // let date2 = Intl.DateTimeFormat("es-ES").format(date);

  // let myDate = Date.now("12/08/2021")

  // console.log(myDate)
  // console.log(date)
  // console.log(date2)
}

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
  let ticksNumber = Math.floor((deg*-1) / 60)
  let index = 0
  let newTicks = Math.pow(ticksNumber, 2) / 2
  let time = 2200 / newTicks
  let tiempo2 = 0
  function soundLoop2() {
    if (index <= ticksNumber) {
      index++
      tiempo2 = tiempo2 + time
      setTimeout(() => {
        soundRoulette()
        soundLoop2()
      }, tiempo2);
    }
  }
  soundLoop2()
  $('.contanerRoulette').css('transform', 'rotate('+deg+'deg)')
  setTimeout(() => {
    $('.contanerRoulette').css('transition', 'none')
    setTimeout(() => {
      $('.contanerRoulette').css('transform', 'rotate('+numero+'deg)')
    }, 80);
  }, 2900);

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
      $('.contanerRoulette').css('transition', 'all cubic-bezier(0, 0, 0.5, 1) 3s')
      $('.contanerRoulette').css('transform', 'rotate(60deg)')
    }, 3015);
  } else if (numero > 90 && numero <= 150) {
    varGame.numberRoulette = 5
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all cubic-bezier(0, 0, 0.5, 1) 3s')
      $('.contanerRoulette').css('transform', 'rotate(120deg)')
    }, 3015);
  } else if (numero > 150 && numero <= 210) {
    varGame.numberRoulette = 4
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all cubic-bezier(0, 0, 0.5, 1) 3s')
      $('.contanerRoulette').css('transform', 'rotate(180deg)')
    }, 3015);
  } else if (numero > 210 && numero <= 270) {
    varGame.numberRoulette = 3
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all cubic-bezier(0, 0, 0.5, 1) 3s')
      $('.contanerRoulette').css('transform', 'rotate(240deg)')
    }, 3015);
  } else if (numero > 270 && numero <= 330) {
    varGame.numberRoulette = 2
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all cubic-bezier(0, 0, 0.5, 1) 3s')
      $('.contanerRoulette').css('transform', 'rotate(300deg)')
    }, 3015);
  } else if (numero > 330 && numero <= 360) {
    varGame.numberRoulette = 1
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all cubic-bezier(0, 0, 0.5, 1) 3s')
      $('.contanerRoulette').css('transform', 'rotate(360deg)')
    }, 3015);
  } else if (numero > 0 && numero <= 30) {
    varGame.numberRoulette = 1
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all cubic-bezier(0, 0, 0.5, 1) 3s')
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
