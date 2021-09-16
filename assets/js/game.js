function moveAvatar(position) {
  const avatar = $('#Game .imgAvatar')
  function loop() {
    setTimeout(() => {
      if (varGame.oldAvatarPosition < position) {
        varGame.oldAvatarPosition++
        loop()
        $(avatar).css({'top': avatarTable[varGame.oldAvatarPosition].top+'px', 'left': avatarTable[varGame.oldAvatarPosition].left+'px'});
      }
    }, 800);
  }
  loop()
}

function playVideo() {
  $("#pigVideo").attr("src", "assets/video/video.gif")
  $("#pigVideo").show()
  $("#pig").hide()
  setTimeout(() => {
    soundPig.play()
  }, 650);
  setTimeout(() => {
    $("#breakpig").show()
    $("#pigVideo").hide()
    $("#pigVideo").attr("src", "")
    setTimeout(() => {
      soundPig.pause()
      soundPig.currentTime = 0;
    }, 125);
  }, 1500);
}
