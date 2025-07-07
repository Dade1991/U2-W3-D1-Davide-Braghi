// in seguito alla crescente popolarità di JS e dello sviluppo web in generale,
// con ES6 è stata introdotta una nuova keyword che ha permesso di creare delle
// funzioni costruttore con un'altra sintassi: la keyword "class"

// le CLASSI sono una sintassi -alternativa- per la creazione di F. COSTRUTTORE

class CompletePerson {
  // a questo punto dobbiamo fare una distinzione:
  // le proprietà che intendiamo creare con un valore
  // derivante da un dato fornito vanno inserite
  // in una speciale funzione chiamata "constructor"
  constructor(_firstName, _lastName, _address, _city, _zipCode) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.address = _address
    this.city = _city
    this.zipCode = _zipCode
  }
  // mentre le proprietà o i metodi che NON derivano
  // da un dato fornito possono essere posizionate
  // fuori dal constructor

  active = true // la proprietà active verrà aggiunta a OGNI istanza della classe
  // CompletePerson, ma poichè il suo valore NON deriva da un parametro
  // non ha tanto senso inserirla all'interno del constructor

  showCompleteName = function () {
    // return 'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
    return `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
  }
}

const koopa = new CompletePerson(
  'Koopa',
  'Troopa',
  'Lava Kingdom 1',
  'Bowser Castle',
  54321
)

console.log(koopa)
console.log(koopa.showCompleteName())

// SUGAR COATING
// la funzione costruttore è stata "vestita" di zucchero :)

// una CLASSE è come una fabbrica di oggetti, uno "stampino"
// l'oggetto che viene costruito dalla classe viene definito ISTANZA
// (koopa è un'ISTANZA della classe CompletePerson)
