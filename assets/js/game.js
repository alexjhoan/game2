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
