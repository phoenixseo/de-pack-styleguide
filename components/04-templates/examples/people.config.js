'use strict';
const {faker} = require('@faker-js/faker');

const memberCount = 24; // how many members we should generate data for
const memberData = [];

for (var i = 0; i < memberCount; i++) {
  memberData.push({
    avatar: faker.image.people(64, 64, true),
    name: faker.name.findName(), // generate a random name
    job: faker.name.jobTitle(),
  });
}

module.exports = {
	context: {
		people: memberData // use our generated list of members as context data for our template.
	}
};
