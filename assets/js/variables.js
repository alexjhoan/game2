// --------------Variables--------------

// NOTE: la variable Money contiene los montos de las cartas, cochinito y cantidad de ceros a mostrar,
// si una carta dice que gano bs. 500.000 corresponde al blueCard en la posicion 5 y se le agregan los ceros
// IMPORTANTE: no quitar el 1 antes de los ceros ya que funciona como multiplicador

let money = {
  ceros: 100000,
  blueCard: [0,1,2,3,4,5,6,7,8,9],
  greenCard: [0, 1.5, 2.5, 6, 7, 8, 3],
  pig: 2
}

// NOTE: cartas (typeCard) segun el array:

// 0 = blueCards
// 1 = cianCards
// 2 = greenCards
// 3 = redCards
// 4 = yellowCards

let randomCard = {
  typeCard: 0,
  new: [0,0,0,0,0],
  old:[[],[],[],[],[]]
}

let settingChild = {
  gameChild : 'boy',
  hair: '#4C141A',
  skin: '#F7C0A2',
  clothes: {
    shirt: '#ff8500',
    pants: '#DB6D06',
  }
}

let varGame = {
  numberRoulette: 1,
  avatarPosition: 34,
  oldAvatarPosition: 34
}

const gameBox = [0,1,0,0,4,0,2,3,0,0,0,4,0,2,0,1,4,0,0,1,3,0,2,0,4,0,0,0,3,0,1,0,2,0,3,0,2,0,1,4,5]

const avatarTable = [
  {top: 203, left: 686},
  {top: 251, left: 556},
  {top: 255, left: 481},
  {top: 259, left: 406},
  {top: 261, left: 332},
  {top: 258, left: 258},
  {top: 249, left: 185},
  {top: 234, left: 109},
  {top: 202, left: 94},
  {top: 211, left: 168},
  {top: 218, left: 243},
  {top: 222, left: 318},
  {top: 224, left: 393},
  {top: 219, left: 466},
  {top: 214, left: 539},
  {top: 207, left: 614},
  {top: 199, left: 686},
  {top: 178, left: 638},
  {top: 180, left: 567},
  {top: 183, left: 492},
  {top: 187, left: 425},
  {top: 188, left: 350},
  {top: 187, left: 279},
  {top: 183, left: 206},
  {top: 173, left: 142},
  {top: 151, left: 119},
  {top: 152, left: 187},
  {top: 153, left: 257},
  {top: 152, left: 322},
  {top: 151, left: 393},
  {top: 149, left: 461},
  {top: 150, left: 533},
  {top: 147, left: 596},
  {top: 143, left: 665},
  {top: 118, left: 632},
  {top: 116, left: 566},
  {top: 115, left: 498},
  {top: 116, left: 432},
  {top: 119, left: 364},
  {top: 119, left: 298},
  {top: 111, left: 230},
  {top: 59, left: 229}
]


