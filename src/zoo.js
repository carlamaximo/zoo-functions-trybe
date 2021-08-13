const { species } = require('./data');
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

function countAnimals(speciesZoo) {
  // const obj = {};
  // // const todasEspecies = species.map((specie) => `${specie.name}: ${specie.residents.length}`);
  // const todasEspecies = species.forEach((specie) => {
  //   obj[specie.name] = specie.residents.length;
  //   return obj;
  // });
  // const umaEspecie = species.find(({ name }) => name === speciesZoo).residents.length;
  // return (!speciesZoo) ? todasEspecies : umaEspecie;
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
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
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
