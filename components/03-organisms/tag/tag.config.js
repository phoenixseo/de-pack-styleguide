'use strict';
const {faker} = require('@faker-js/faker');

const tagCount = 35;
const tagData = [];

for (var i = 0; i < tagCount; i++) {
  tagData.push({
    text: faker.name.fullName()
  });
}

module.exports = {
  context: {
    tags: tagData
  }
};
