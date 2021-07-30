function awardsActive(active) {
  $('.containerselectAward .premio.active').removeClass('active')
  $(active).addClass('active')

  $("#selectedAward").removeAttr("disabled");
}

function selectaward() {
  var Selet = $('.containerselectAward .premio.active').attr('data-value');
  if (Selet==1) {
    $("#bici").removeClass('hide');
  }
  else if (Selet==2) {
    $("#perro").removeClass('hide');
  }
  else if (Selet==3) {
    $("#laptop").removeClass('hide');
  }

  else if (Selet==4) {
    $("#cel").removeClass('hide');
  }

  }

