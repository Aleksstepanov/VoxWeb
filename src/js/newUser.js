export class newUser {
  constructor(options) {
    this.name = options.name, 
    this.phone = options.phone, 
    this.country = options.country, 
    this.date = options.date,
    this.social = options.social,
    this.about = options.about,
    this.news = options.news,
    this.personal = options.personal
  }

  isValidName() {
    return this.name.length>3
  }
  
  isValidPhone() {
    let pattern = /^\d[\d\(\)\ -]{4,14}\d$/
    return pattern.test(this.phone)
  }
  isValidCountry() {
    return this.country.value === ''
  }
  isValidPersonal() {
    return this.personal.checked
  }
  
}
