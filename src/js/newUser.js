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
    
  }
  
}
