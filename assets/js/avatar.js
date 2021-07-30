function btn(child) {
  $('#Avatar .imgAvatar').load(`assets/icons/${child}.svg`);
  $(`#Avatar .selectAvatar button.active`).removeClass(`active`);
  $(`#Avatar .selectAvatar button.${child}`).addClass(`active`);
  $(`#Avatar .imgAvatar`).hide();
  setTimeout(() => {
    $('.imgAvatar .hair').attr('fill', settingChild.hair);
    $('.imgAvatar .skin').attr('fill', settingChild.skin);
    $('.imgAvatar .shirt').attr('fill', settingChild.clothes.shirt);
    $('.imgAvatar .pants').attr('fill', settingChild.clothes.pants);
    $(`#Avatar .imgAvatar`).show();
  }, 10);
  settingChild = { ...settingChild,
    gameChild: child
  }
}

function skin(colorSkin) {
  $('.imgAvatar .skin').attr('fill', colorSkin);
  settingChild = { ...settingChild,
    skin: colorSkin
  }
}

function hair(colorHair) {
  $('.imgAvatar .hair').attr('fill', colorHair);
  settingChild = { ...settingChild,
    hair: colorHair
  }
}

function clothes(shirt, pants) {
  $('.imgAvatar .shirt').attr('fill', shirt);
  $('.imgAvatar .pants').attr('fill', pants);
  settingChild = { ...settingChild,
    clothes: {
      shirt: shirt,
      pants: pants,
    }
  }
}

