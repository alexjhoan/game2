  //variables
  var okAudio = new Audio('../assets/sounds/correct.mp3');
  var errorAudio = new Audio('../assets/sounds/error.mp3');
  var s = 40;
  let endMemory = false
  var cards_memory =[
      {
          type:"1",
          image: "assets/img/memory/0.png"
      },
      {
          type:"1",
          image: "assets/img/memory/1.png"
      },
      {
          type:"2",
          image: "assets/img/memory/2.png"
      },
      {
          type:"2",
          image: "assets/img/memory/3.png"
      },
      {
          type:"3",
          image: "assets/img/memory/4.png"
      },
      {
          type:"3",
          image: "assets/img/memory/5.png"
      },
      {
          type:"4",
          image: "assets/img/memory/6.png"
      },
      {
          type:"4",
          image: "assets/img/memory/7.png"
      },
      {
          type:"5",
          image: "assets/img/memory/8.png"
      },
      {
          type:"5",
          image: "assets/img/memory/9.png"
      },
      {
          type:"6",
          image: "assets/img/memory/10.png"
      },
      {
          type:"6",
          image: "assets/img/memory/11.png"
      },
  ]

  function loadMemoryCards() {
    for (var i = 0; i < cards_memory.length; i++) {
      var boardElements = $(
        '<div class="containerCard"><div class="card locked" onclick="flipCard(this)"><div class="cardfront cardBox"></div><div class="cardBack cardBox"><div class="image" data-type="' +
        cards_memory[i].type +
        '" style="background-image: url(' +
        cards_memory[i].image +
        ');"/></div>' +
        "></div></div>"
      );
      boardElements.appendTo("#board");
    }
    let allCards = $("#board").children();
    setTimeout(() => {
      while (allCards.length) {
        $("#board").append(allCards.splice(Math.floor(Math.random() * allCards.length), 1)[0]);
      }
    }, 100);
  }

    var turn = 0;
    var firstOpenCard, secondOpenCard;

    function reset() {
      turn = 0;
      firstOpenCard = "";
      secondOpenCard = "";
    }


    function flipCard(itemCard) {
      $(itemCard).toggleClass("flipCard");
        if (turn == 0) {
        firstOpenCard = $(itemCard)
          .find(".image")
          .data("type");
        turn++;
      } else if (turn == 1) {
        secondOpenCard = $(itemCard)
          .find(".image")
          .data("type");

        if (secondOpenCard === firstOpenCard) {
            addAudios(okAudio);
           $(".flipCard").addClass("successful");
           $(".flipCard").addClass("hidden");

           reset();

          if ($(".successful").length == cards_memory.length) {
            clearInterval(gameTimer);
            setTimeout(function() {
                successfulMessage();
            }, 1000);
          }
        } else {
        addAudios(errorAudio);
          reset();
          setTimeout(function() {
            $(".card").removeClass("flipCard");

          }, 1000);
        }
      }
    }

  function startMemory() {
    $(".card").removeClass("locked");
    $(".start_button").addClass("hidden");
    $(".game_message").css("display","none");
    $(".game_message").removeClass("ani ani2")
     tiempo();
  }

  function closedModalMemory() {
    $(".game_message").addClass("ani2");
    $(".game_message").css("display","block");
    $(".start_button").removeAttr("disabled");
    setTimeout(function() {
        $('.result').text("");
    },2000);
    setTimeout(() => {
      if (endMemory) {
        $('#Memory').hide()
        $('#Game').show()
      }
    }, 500);

  }


  function welcomeMessage(){
    $(".game_message").css("display","block");
    $('.result').text(" Encuentra el anverso y reverso de cada billete antes de que se termine el tiempo. Haz clic en el botón de iniciar para empezar a jugar.");
  }
  function successfulMessage(){
    addAudios(okAudio);
    $(".game_message").css("display","block");
    $('.result').text("¡Muy bien! has ganado Bs. 200.000");
    endMemory = true
  }
  function failedMessage(){
    $(".card").toggleClass("locked");
    addAudios(errorAudio);
    $(".game_message").css("display","block");
    $('.result').text("No pudiste terminar a tiempo. No haz ganado el bono.");
    endMemory = true
  }
  function tiempo  () {
    gameTimer = setInterval(function() {
      s--;
        if (s == 0) {
            failedMessage();
            clearInterval(gameTimer);
        }
        var seg = s<=9?'0'+s:s;
          document.getElementById("timer").innerHTML =  seg;
    },1000);
  }
   function addAudios (type) {
    type.currentTime = 0;
    type.play();
    type.volume = 0.5;
  }
