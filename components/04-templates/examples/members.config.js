'use strict';
const {faker} = require('@faker-js/faker');

const memberCount = 10; // how many members we should generate data for
const memberData = [];

for (var i = 0; i < memberCount; i++) {
  memberData.push({
    avatar: faker.image.people(64, 64, true),
    name: faker.name.findName(), // generate a random name
    email: faker.internet.email(),  // generate a random email address
    address: faker.address.zipCode('#####') + ' ' + faker.address.city()
  });
}

module.exports = {
	context: {
		members: memberData // use our generated list of members as context data for our template.
	}
};
