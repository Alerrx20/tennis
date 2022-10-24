const Player = require('./player');

test('Crear jugador debe ser intancia de Player', () => {
  const player1 = new Player();
  expect(typeof player1).toBe('object');
  expect(player1).toBeInstanceOf(Object);
  expect(player1).toBeInstanceOf(Player);
});

test('Crear jugador con nombre, se almacena nombre en propiedad name', () => {
  const player1 = new Player('Pepe');
  expect(player1.name).toBe('Pepe');
});

test('Ver si un jugador es male o female', () => {
  const player1 = new Player('Pepe');
  const player2 = new Player('Pepe', 'female');
  const player3 = new Player('Pepe', 'male');
  const player4 = new Player('Pepe', 'hola');
  expect(player1.sex).toBe('female');
  expect(player2.sex).toBe('female');
  expect(player3.sex).toBe('male');
  expect(player4.sex).toBe('female');
});

test('Consultar el sexo de una persona pero no modificarla', () => {
  const player1 = new Player('Pepe', 'female');
  expect(player1.sex).toBe('female');
  player1.sex = 'male';
  expect(player1.sex).toBe('female');
});

test('Consultar el sexo de una persona pero no ', () => {
  const player1 = new Player('Pepe', 'female', '23/12/2000');
  const date1 = new Date(2000, 12, 23);
  expect(player1.birthday).toEqual(date1);
  
});
