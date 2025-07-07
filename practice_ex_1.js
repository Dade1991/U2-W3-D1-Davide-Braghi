class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  ageComparator = function (otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} is older than ${otherUser.firstName}`
    } else if (this.age < otherUser.age) {
      return `${this.firstName} is younger than ${otherUser.firstName}`
    } else this.age === otherUser.age
    return `${this.firstName} age is the same as ${otherUser.firstName} age.`
  }
}

const davide = new User(`Davide`, `Braghi`, 33, `Piacenza`)
const clara = new User(`Clara`, `Schillaci`, 33, `Enna`)
const beatrice = new User(`Beatrice`, `Braghi`, 27, `Piacenza`)
const riccardo = new User(`Riccardo`, `Marra`, 41, `Lecce`)

console.log(davide)
console.log(clara)
console.log(beatrice)
console.log(riccardo)

console.log(davide.ageComparator(clara))
console.log(davide.ageComparator(beatrice))
console.log(davide.ageComparator(riccardo))
