// Creo una classe PET in cui andrò ad inserire un "costruttore" che raccoglie i vari input forniti.
// Il termine THIS fa parte della sintassi e si rifereisce a SOLO la class nella quale è inserito.

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}

// localizzo subito su quali elementi del documento HTML andrò ad internire, richiamandoli con "getElementById"

const petNameInput = document.getElementById(`petNameInput`)
const ownerNameInput = document.getElementById(`ownerNameInput`)
const speciesInput = document.getElementById(`speciesInput`)
const breedInput = document.getElementById(`breedInput`)
const rubricaForm = document.getElementById(`rubrica-form`)
const petList = document.getElementById(`petList`)

// creo un Array in cui ciclare e controllare i nomi dei possessori degli animali.

const petsArray = []

// Scrivo la funzione che mi permette di aggiungere un evento ad ogni "submit" che:
// - Non fa aggiornare la pagina ogni volta che schiaccio su "submit" o invia;
// - Raccoglie solo i valori (value) forniti dal form;

rubricaForm.addEventListener(`submit`, function (e) {
  e.preventDefault()
  const newPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )

  // aggiungo un ciclo for che controllerà se negli input appena forniti nel form, esiste una corrispondenza con gli input precedentemente inseriti nel form (e quindi anche nello stesso "petsArray")
  // Di base è "false", se trova corrisponza con il nome del proprietario, diventerà "true".

  let ownerNameComparison = false
  for (let i = 0; i < petsArray.length; i++) {
    if (petsArray[i].ownerName === newPet.ownerName) {
      ownerNameComparison = true
    }
  }

  // Pusho i miei risultati dentro l'array "petsArray"

  petsArray.push(newPet)

  // In ultimo vado a creare un elemento per visualizzare sul documento HTML la lista di tutti i possibili input (informazioni compilate nel form) che l'utente invierà (appendChild su petList richiamato/identificato sopra);

  const singleItemPet = document.createElement(`li`)
  singleItemPet.textContent = `Pet's Name: ${newPet.petName}, Owner's Name: ${newPet.ownerName}, Pet's Species: ${newPet.species}, Pet's Breed: ${newPet.breed}. Altro animale con stesso proprietario? ${ownerNameComparison}`
  petList.appendChild(singleItemPet)
})
