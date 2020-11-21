const faker = require("faker");

const employeeData = [];

for(let i = 0; i < 200; i++) {
  let employee = {
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    dob: {
      date: faker.date.past().toString()
    },
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),

  }
  employeeData.push(employee);
}
console.log(employeeData);

module.exports = employeeData
