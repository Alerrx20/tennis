class Player {
  name;

  #sex;

  birthday;

  constructor(name, sex, date) {
    this.name = name;
    this.#sex = sex;
    if (sex !== 'female' && sex !== 'male') {
      this.#sex = 'female';
    }
    if (date) {
      const [d, m, y] = date.split('/');
      this.birthday = new Date(y, m, d);
    }
  }

  get category() {
    let result;
    if (this.age < 12) {
      result = 'Benjamin';
    } else if (this.age >= 12 && this.age <= 15) {
      result = 'Cadet';
    } else if (this.age >= 16 && this.age <= 19) {
      result = 'Junior';
    } else {
      result = 'Senior';
    }
    return result;
  }

  get age() {
    const actual = new Date();
    let edad = actual.getFullYear() - this.birthday.getFullYear();
    const month = actual.getMonth() - this.birthday.getMonth();
    if (month < 0 || (month === 0 && actual.getDay() < this.birthday.getDay())) {
      edad -= 1;
    }
    return edad;
  }

  get sex() {
    return this.#sex;
  }
}
module.exports = Player;
