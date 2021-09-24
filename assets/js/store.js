function messageStore() {
  $(`#Store .premio`).addClass('disabled')
  $(`#Store .premio.active`).removeClass('active')
  $(`#Store .premio[data-id=${varGame.toWin}]`).addClass('active')
  $('#Store .mount p').text(`Bs. ${(money.pig * money.ceros).toLocaleString()}`);
  if (money.pig >= mountAwards[varGame.toWin]) {
    $('#Store .positivemessage p').text('¡Felicidades! Has logrado ahorrar la cantidad suficiente para comprar lo que querías. Si te sobra dinero continúa ahorrándolo.');
    $(`#Store .premio[data-id=${varGame.toWin}]`).removeClass('disabled')
    $(`#Store .continerPrice p:not([data-id=${varGame.toWin}])`).addClass('disabled')
    varGame.wonObj.push(varGame.toWin)
  } else {
    $('#Store .positivemessage p').text('¡No tienes suficiente dinero! En esta oportunidad no podrás comprar el objeto seleccionado. ¡Juega nuevamente!');
    $(`#Store .continerPrice p`).addClass('disabled')
  }
}

function newGame() {
  $('#Store').hide()
  $('#Awards .imgAvatar').load(`assets/icons/${settingChild.gameChild}.svg`);
  $('#Awards .containerselectAward .premio.active').removeClass('active')
  $('#board').text('')
  $('#Awards .continerPrice').text('')
  $('#Store .continerPrice').text('')
  $("#selectedAward").prop("disabled", true);
  $(`#Awards .containerselectAward .premio.active`).removeClass('active')
  $(".breakpig").hide()
  $("#hammer").hide()
  $("#pig").show()
  $(".breakpig").removeClass('animatepig')
  setTimeout(() => {
    $('#Awards .imgAvatar .hair').attr('fill', settingChild.hair);
    $('#Awards .imgAvatar .skin').attr('fill', settingChild.skin);
    $('#Awards .imgAvatar .shirt').attr('fill', settingChild.clothes.shirt);
    $('#Awards .imgAvatar .pants').attr('fill', settingChild.clothes.pants);
    $(`#Awards .imgAvatar`).show();
    $('#Awards').show()
  }, 80);
  varGame = { ...varGame,
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
  s = 40
  $('#board').text('')
  $('.containerwhiteribbon .mount span').text('');
  if (money.pig >= mountAwards[varGame.toWin]) {
    money.pig = money.pig - mountAwards[varGame.toWin]
  }else{
    money.pig = 2
  }
  addMounts()
}
