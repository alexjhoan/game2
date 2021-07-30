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

// function moveAvatar(position) {
//   // let index = position - varGame.numberRoulette
//   let index = varGame.oldAvatarPosition
//   const avatar = $('#Game .imgAvatar')
//   function loop() {
//     setTimeout(() => {
//       varGame.oldAvatarPosition++
//       if ((varGame.oldAvatarPosition - 1) <= position) {
//         loop()
//         $(avatar).css({'top': avatarTable[varGame.oldAvatarPosition].top+'px', 'left': avatarTable[varGame.oldAvatarPosition].left+'px'});
//         console.log(varGame.oldAvatarPosition)
//       }
//     }, 800);
//   }
//   loop()
//   console.log(varGame)
// }
