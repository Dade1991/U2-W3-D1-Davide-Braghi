// volendo, invece di creare oggetti "a mano" con la notazione letterale
// di JS è possibile crearli "in serie" con una funzione costruttore!

const person1 = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  address: 'Via Roma 1',
  city: 'Gorizia',
  zipCode: 34170,
  showCompleteName: function () {
    // return 'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
    return `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
  },
}

console.log(person1.address) // 'Via Roma 1'
console.log(person1.showCompleteName()) // 'Ciao, io mi chiamo Stefano Casasola'

// ok, funziona. Però, se ora volessi creare altri 5 person, dovrei copiare/incollare
// o ricopiare a mano tutte le proprietà (incrociando le dita).
// un modo migliore per generare altri oggetti simili sarebbe quello di generalizzare
// questa struttura e costruirci intorno una FUNZIONE COSTRUTTORE.

// per le funzioni costruttore si utilizza la nomenclatura PascalCase per le variabili
const Person = function () {
  // ho creato una FABBRICA DI OGGETTI DI TIPO PERSON
  // riempio la funzione con le proprietà che desidero infondere negli oggetti
  this.firstName = ''
  this.lastName = ''
  this.address = ''
  this.city = ''
  this.zipCode = 0
  this.showCompleteName = function () {
    // return 'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
    return `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
  }
}

// fabbrica pronta! come la "accendo"?
const mario = new Person()
const luigi = new Person()
const bowser = new Person()

// ...però al momento sono "gusci vuoti", con tutte le proprietà della fabbrica
// ma con tutti i valori vuoti

// quindi ora dovete riempirli con dei valori
mario.firstName = 'Mario'
mario.lastName = 'Bros'

luigi.firstName = 'Luigi'
luigi.lastName = 'Bros'

console.log(mario)
console.log(luigi)
console.log(bowser)

// esiste un modo più pratico? posso creare una Person con già i valori
// di firstName, lastName etc.?

// arricchiamo la nostra invocazione della funzione costruttore con dei valori
// in modo da far "nascere" gli oggetti già completi!

const CompletePerson = function (
  _firstName,
  _lastName,
  _address,
  _city,
  _zipCode
) {
  this.firstName = _firstName
  this.lastName = _lastName
  this.address = _address
  this.city = _city
  this.zipCode = _zipCode
  this.showCompleteName = function () {
    // return 'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
    return `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
  }
}

const newMario = new CompletePerson(
  'Mario',
  'Bros',
  'Via dei Funghi 1',
  'Mushroom Kingdom',
  12345
)
const newLuigi = new CompletePerson(
  'Luigi',
  'Bros',
  'Via dei Funghi 1',
  'Mushroom Kingdom',
  12345
)
const peach = new CompletePerson(
  'Peach',
  'Toadstool',
  'Mushroom Castle',
  'Mushroom Kingdom',
  12345
)
console.log(newMario)
console.log(newLuigi)
console.log(peach)

console.log(peach.showCompleteName())

// generiamo un array con dentro già un personaggio
const arrayOfCharacters = [
  new CompletePerson(
    'Mario',
    'Bros',
    'Via dei Funghi 1',
    'Mushroom Kingdom',
    12345
  ),
]
