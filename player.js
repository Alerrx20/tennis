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

  get sex() {
    return this.#sex;
  }
}
module.exports = Player;
