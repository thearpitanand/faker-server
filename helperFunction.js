// Faker
const { faker } = require("@faker-js/faker");

const getData = () => {
  const salaryDigit = Math.floor(Math.random() * 10);
  const generateResponse = {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    salary: faker.random.numeric(salaryDigit),
  };
  return generateResponse;
};

const generateRandomData = (numberOfDataRequired = 500) => {
  const arr = [];
  for (let index = 0; index < numberOfDataRequired; index++) {
    arr.push(getData());
  }
  return arr;
};

module.exports = { generateRandomData };
