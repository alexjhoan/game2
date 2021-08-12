let addMoney = false

function randomCardFunction(arrayCard) {
  let min = 0
  let max = cards[randomCard.typeCard].length - 1
  let num = Math.floor(Math.random()*(max-min+1))+min;

  if (randomCard.old[arrayCard].length > max) {
    alert('no hay mas cartas aleatorias')
  } else {
    if (!randomCard.old[arrayCard].includes( num )) {
      randomCard.new[arrayCard] = num
      randomCard.old[arrayCard].push(num)
    } else {
      while (randomCard.old[arrayCard].includes( num )) {
        num = Math.floor(Math.random()*(max-min+1))+min;
      }
      randomCard.new[arrayCard] = num
      randomCard.old[arrayCard].push(num)
    }
  }
}

function viewCard(colorCard, arrayCard) {
  clearTimeout(timerId);
  randomCard.typeCard = arrayCard
  randomCardFunction(arrayCard)
  soundShowCard.play();
  if (randomCard.new[randomCard.typeCard] < cards[randomCard.typeCard].length) {
    setTimeout(() => {
      $(`.${colorCard} .innerQuestion`).text(cards[randomCard.typeCard][randomCard.new[arrayCard]].text).show()
      if (randomCard.typeCard === 4) {
        $(`.${colorCard} .modalFeedback`).show();
      } else {
        let button = cards[randomCard.typeCard][randomCard.new[arrayCard]].options.map((btn, i) =>{
          return(`<p onclick="response(${btn.valid})"><span>${i + 1}.</span> ${btn.text}</p>`)
        })
        $(`.${colorCard} .modalQuestion`).append(button);
        $(`.${colorCard} .modalQuestion`).show();
      }
    }, 50);
    setTimeout(() => {
      $(`.${colorCard}`).addClass('selectCard');
    }, 350);
    $('#ModalBg').fadeIn()
    setTimeout(() => {
      $(`.${colorCard}`).addClass('showCard');
    }, 750);
  } else {
    alert('no hay mas cartas de este color viewCard')
  }
}

function response(valid) {
  const feedbacks =  cards[randomCard.typeCard][randomCard.new[randomCard.typeCard]].feedback
  const profit = ' Has ganado Bs. ' + (money.blueCard[feedbacks.indexMoney] * money.ceros).toLocaleString() + '.'
  const greenCard = money.greenCard[feedbacks.indexMoney]
  $('.innerQuestion').hide()
  $('.modalQuestion').hide()
  $('.modalFeedback').fadeIn()
  if (randomCard.typeCard === 0 ) {
    if (valid === true) {
      $('.modalFeedback p').text(feedbacks.positive + profit)
      money.pig = money.pig + money.blueCard[feedbacks.indexMoney]
      soundCorrect.play()
      addMoney = true
    } else {
      $('.modalFeedback p').text(feedbacks.negative)
      soundError.play()
    }
  } else if (randomCard.typeCard === 1 ) {
    if (valid === true) {
      $('.modalFeedback p').text(feedbacks.positive)
      varGame.avatarPosition = varGame.avatarPosition + 1
      soundCorrect.play()
    } else {
      $('.modalFeedback p').text(feedbacks.negative)
      soundError.play()
    }
  } else if (randomCard.typeCard === 2 ) {
    if (valid === true) {
      $('.modalFeedback p').text(feedbacks.positive + (feedbacks.indexMoney ? (greenCard * money.ceros).toLocaleString() + '.' : "" ))
      money.pig = money.pig + greenCard
      soundCorrect.play()
      addMoney = true
    } else {
      $('.modalFeedback p').text(feedbacks.negative + (feedbacks.indexMoney ? (greenCard * money.ceros).toLocaleString() + '. No has ganado dinero.' : ""))
      soundError.play()
    }
  } else if (randomCard.typeCard === 3 ) {
    if (valid === true) {
      $('.modalFeedback p').text(feedbacks.positive.text + (feedbacks.positive.spend * money.ceros).toLocaleString() + '.')
      money.pig = money.pig - feedbacks.positive.spend
      soundCorrect.play()
    } else {
      $('.modalFeedback p').text(feedbacks.negative.text + (feedbacks.negative.spend * money.ceros).toLocaleString() + '.')
      money.pig = money.pig - feedbacks.negative.spend
      soundError.play()
    }
  }
}

function hideCards(colorCard) {
  $("#rouletteSpin").removeAttr("disabled");
  $(`.${colorCard}`).removeClass('showCard');
  setTimeout(() => {
    $(`.${colorCard}`).removeClass('selectCard');
    $(`.${colorCard} .innerQuestion`).text("")
    $(`.${colorCard} .modalQuestion`).text("").show();
    $(`.modalFeedback`).hide()
    $('#ModalBg').fadeOut()
  }, 400);

  $('#pig').removeClass('animate__tada animate__headShake')

  if (randomCard.typeCard === 1) {
    $("#rouletteSpin").prop("disabled", true);
    clearTimeout(timerId);
    setTimeout(() => {
      $($('#Game .imgAvatar')).css({'top': avatarTable[varGame.avatarPosition].top+'px', 'left': avatarTable[varGame.avatarPosition].left+'px'});
    }, 1100);
    setTimeout(() => {
      $("#rouletteSpin").removeAttr("disabled");
    }, 2000);
    setTimeout(() => {
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
      if ((varGame.avatarPosition > varGame.oldAvatarPosition)) {
        viewCard(viewCardColor, gameBox[varGame.avatarPosition -1])
        varGame.oldAvatarPosition = varGame.oldAvatarPosition + 1
      }
    }, 2000);
  } else {
    rouletteDimer(10000)
  }
  soundFlipCardGame.play();

  if (addMoney) {
    setTimeout(() => {
      soundMoney.play()
      $('#Game .mountPig p').text(`Bs. ${(money.pig * money.ceros).toLocaleString()}`);
      $('#pig').attr('src', 'assets/img/alcancia/cerdolleno.png');
      $('#pig').addClass('animate__tada')
      setTimeout(() => {
        $('#pig').attr('src', 'assets/img/alcancia/cerdofeliz.png');
      }, 1500);
      addMoney = false
    }, 1100);
  } else {
    setTimeout(() => {
      $('#Game .mountPig p').text(`Bs. ${(money.pig * money.ceros).toLocaleString()}`);
      $('#pig').addClass('animate__headShake')
    }, 1100);
  }




  // funcion para que se muestre una a una.... eliminar despues
  // if (randomCard.new[randomCard.typeCard] > cards[randomCard.typeCard].length) {
  //   alert('no hay mas cartas de este color')
  // } else {
  //   randomCard.new[randomCard.typeCard] ++
  // }

  // console.log(randomCard)
}
