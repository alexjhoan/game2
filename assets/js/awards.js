function addMounts() {
  let impMount = Object.values(mountAwards).map(mount => {
    return (
      `<p>Bs. ${(mount*money.ceros).toLocaleString()}</p>`
    )
  })
  $('#Awards .continerPrice').append(impMount)
}

function awardsActive(active) {
  $('.containerselectAward .premio.active').removeClass('active')
  $(active).addClass('active')
  varGame.toWin = active.dataset.id
  $("#selectedAward").removeAttr("disabled");
}

function selectaward() {
  $('.containerwhiteribbon .mount span').text((mountAwards[varGame.toWin] * money.ceros).toLocaleString());
}


// store

function messageStore() {
  if (money.pig >= mountAwards[varGame.toWin]) {
    $('#Store .positivemessage p').text('¡Felicidades! Has logrado ahorrar la cantidad suficiente para comprar lo que querías. Si te sobra sobra dinero continúa ahorrándolo.');
  } else {
    $('#Store .positivemessage p').text('¡No tienes suficiente dinero! En esta oportunidad no podrás comprar el objeto seleccionado. ¡Juega nuevamente!');
  }
}

function newGame() {
  $('#Store').hide()
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
  varGame = {
    numberRoulette: 1,
    avatarPosition: 0,
    oldAvatarPosition: 0
  }
  randomCard = {
    typeCard: 0,
    new: [0,0,0,0,0],
    old:[[],[],[],[],[]]
  }
  $('#Game .imgAvatar').css({'top': avatarTable[varGame.oldAvatarPosition].top+'px', 'left': avatarTable[varGame.oldAvatarPosition].left+'px'})
  $('.ribbon p.mount').addClass('hide')
  s = 40
  $('#board').text('')
  $('.containerwhiteribbon .mount span').text('');
  if (money.pig >= mountAwards[varGame.toWin]) {
    money.pig = money.pig - mountAwards[varGame.toWin]
  }else{
    money.pig = 2
  }
}
