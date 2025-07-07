// Con la sintassi "class" è possibile replicare anche altre funzionalità
// tipiche dei linguaggi OOP
// proprietà public/private, getter/setter, etc.

class HumanBeing {
  constructor(_firstName, _age, _hairColor, _eyeColor) {
    this.firstName = _firstName
    this.age = _age
    this.hairColor = _hairColor
    this.eyeColor = _eyeColor
  }
  canFly = false
  sayHi = function () {
    return 'Ciao! Io mi chiamo ' + this.firstName + ' e non so volare.'
  }
}

const gianGiorgio = new HumanBeing('GianGiorgio', 20, 'green', 'sand')
console.log(gianGiorgio.sayHi())

// creiamo ora una classe per un Developer
class Developer extends HumanBeing {
  // la classe Developer è detta "sotto-classe" di HumanBeing
  // HumanBeing la potremmo definire la "super-classe" di Developer
  constructor(
    _firstName,
    _age,
    _hairColor,
    _eyeColor,
    _yoe,
    _skills,
    _epicoder
  ) {
    // qui dentro sto ricevendo TUTTI i valori dei parametri per creare un Developer
    // ...però i primi 4 valori lo rendono HumanBeing!
    // quindi RICICLO il COSTRUTTORE di HumanBeing
    super(_firstName, _age, _hairColor, _eyeColor)
    this.yoe = _yoe
    this.skills = _skills
    this.epicoder = _epicoder
  }
}

const fernando = new Developer(
  // questi sono i valori che lo rendono HumanBeing
  'Fernando',
  27,
  'brown',
  'azure',
  //   questi sono i valori che lo rendono Developer
  5,
  ['JS', 'Python'],
  true
)

console.log(fernando)

// è possibile estendere sempre e solo da UNA super-classe (da un parent)
// sarebbe possibile continuare ad estendere Developer e crearne una ulteriore
// sottoclasse (GameDeveloper), che avrebbe TUTTE le caratteristiche di HumanBeing,
// TUTTE le caratteristiche di Developer e ancora potenzialmente ulteriori proprietà/metodi
