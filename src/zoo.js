const { species } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const x = [];
  return ((ids.length === 0) ? x : (species.filter((elemento) => ids.includes(elemento.id))));
}

function getAnimalsOlderThan(animal, age) {
  // const a = data.species.find((a) => a.name === animal);
  // return data.species.every((a) => a.age >= age);
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

function countAnimals() {
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
