const { species, hours } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const x = [];
  return ((ids.length === 0) ? x : (species.filter((elemento) => ids.includes(elemento.id))));
}

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((a) => a.name === animal).residents;
  return animais.every((a) => a.age >= age);
}

function getEmployeeByName(employeeName) {
  const encontraFuncionario = () => employees.find((f) => f.firstName === employeeName
  || f.lastName === employeeName);

  return (!employeeName) ? {} : encontraFuncionario();
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specieZoo) {
  const todasEspecies = {};
  // const todasEspecies = species.map((specie) => `${specie.name}: ${specie.residents.length}`);
  // const todasEspecies = species.map((specie) => { [specie.name]: specie.residents.length});
  species.forEach((specie) => {
    todasEspecies[specie.name] = specie.residents.length;
  });
  const umaEspecie = data.species.find((specie) => specie.name === specieZoo);
  return (!specieZoo) ? todasEspecies : umaEspecie.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const {
    Child = 0, Adult = 0, Senior = 0,
  } = entrants;
  const priceChild = data.prices.Child * Child;
  const priceAdult = data.prices.Adult * Adult;
  const priceSenior = data.prices.Senior * Senior;
  return priceChild + priceAdult + priceSenior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const horarios = Object.entries(hours);
  const o = {
    Monday: 'CLOSED',
  };
  if (!dayName) {
    horarios.forEach((horario) => {
      o[horario[0]] = `Open from ${horario[1].open}am until ${horario[1].close - 12}pm`;
    });
    return o;
  }
  const diaPedido = horarios.find((dia) => dia[0] === dayName);
  console.log(diaPedido);
  o[diaPedido[0]] = `Open from ${diaPedido[1].open}am until ${diaPedido[1].close - 12}pm`;
  return o;
}
// 'Tuesday': 'Open from 8am until 6pm'
// console.log(getSchedule('Monday'));
// getSchedule('Tuesday');
// getSchedule();

// horarios :
// [
//   [ 'Tuesday', { open: 8, close: 18 } ],
//   [ 'Wednesday', { open: 8, close: 18 } ],
//   [ 'Thursday', { open: 10, close: 20 } ],
//   [ 'Friday', { open: 10, close: 20 } ],
//   [ 'Saturday', { open: 8, close: 22 } ],
//   [ 'Sunday', { open: 8, close: 20 } ],
//   [ 'Monday', { open: 0, close: 0 } ]
// ]

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}
// Parte do código feita sozinha
const arrayPeople = () => {

};

function getEmployeeCoverage(idOrName) {
  // Parte do código feito com ajuda da Mayu - 15B, Cris Araldi - 14A e Jéssica Grunewald - 14A
  if (!idOrName) return arrayPeople();
  const people = employees
    .find(({ id, firstName, lastName }) => idOrName === id
    || idOrName === firstName || idOrName === lastName);

  const namePeople = `${people.firstName} ${people.lastName}`;
  console.log(namePeople);

  const arrayAnimals = people.responsibleFor
    .map((element) => species.find((specie) => specie.id === element))
    .map((object) => object.name);

  return { [namePeople]: arrayAnimals };
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
