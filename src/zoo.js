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

// todasEspecies : [
//   'lions: 4',
//   'tigers: 2',
//   'bears: 3',
//   'penguins: 4',
//   'otters: 4',
//   'frogs: 2',
//   'snakes: 2',
//   'elephants: 4',
//   'giraffes: 6'
// ]
console.log(countAnimals());
console.log(countAnimals('lions'));

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
  // const horarios = Object.entries(hours);
  // if (!dayName) {
  //   const resposta = horarios
  //     .map((horario) => `Open from ${horario[1].open}am until ${horario[1].close - 12}pm`);
  //   console.log(resposta);
  // }
  // if (dayName === 'Monday') {
  //   return { Monday: 'CLOSED' };
  // }
  // const diaPedido = horarios.find((dia) => dia[0] === dayName);
  // console.log(diaPedido);
  // const periodo = { [`${diaPedido[0]}]`` : Open from ${diaPedido[1].open}am until ${diaPedido[1].close - 12}pm` };
  // return periodo;
}
// 'Tuesday': 'Open from 8am until 6pm'
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule());

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
    .find(({ id, firstName, lastName}) => idOrName === id 
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
