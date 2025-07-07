// in JS creare un oggetto è semplicissimo! si dichiara un blocco di { } e lo
// si assegna ad una variabile (tipicamente una const)

// NOTAZIONE LETTERALE IN JS
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'johndoe@gmail.com',
}

// nei tradizionali linguaggi OOP per creare anche un singolo oggetto
// è necessario prima, a monte, creare una CLASSE.

person.age // 30
person['age'] // 30

person.__proto__ // Object

const dog1 = {
  name: 'Fido',
  breed: 'Labrador',
}

const dog2 = {
  name: 'Fufy',
  breed: 'Volpino',
}

const dog3 = {
  names: 'Gianni', // ho sbagliato il nome della proprietà!
  breed: 'Golden',
}

// una limitazione nella notazione letterale di JS è che a forza di ricopiare
// le proprietà a mano, a forza di copi/incolla etc. farete degli errori!

// quindi benissimo che JS ci permetta di creare UN oggetto al volo...
// ...ma se arrivasse la necessità di farne TANTI e volessimo avere la garanzia
// della loro uniformità, ecco che possiamo creare una FABBRICA di cani!

// muoviamoci nel file constructor.js
