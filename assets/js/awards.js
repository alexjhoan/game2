function addMounts() {
  let impMount = Object.entries(mountAwards).map(([key, value]) => {
    return (
      `<p data-id=${key}>Bs. ${(value*money.ceros).toLocaleString()}</p>`
    )
  })
  $('#Awards .continerPrice').append(impMount)
  $('#Store .continerPrice').append(impMount)
  varGame.wonObj.map(premio =>{
    $(`#Awards .containerselectAward .premio[data-id=${premio}]`).addClass('disabled')
    $(`#Awards .continerPrice p[data-id=${premio}]`).addClass('disabled')
  })
}

function awardsActive(active) {
  $('.containerselectAward .premio.active').removeClass('active')
  $(active).addClass('active')
  varGame.toWin = active.dataset.id
  $("#selectedAward").removeAttr("disabled");
}

