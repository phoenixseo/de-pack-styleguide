'use strict';
const {faker} = require('@faker-js/faker');

const cols = 4;
const rows = 20;

const thdata = [];
const tddata = [];

for( var i = 0; i < cols; i++ ) {
  thdata.push({
    thcontent: faker.word.noun()
  });
}

for( var i = 0; i < rows; i++ ) {
  tddata.push({
    one: faker.word.noun(),
    two: faker.word.verb(),
    three: faker.word.adjective(),
    four: faker.word.adverb()
  });
}


module.exports = {
  context: {
    tablehead: thdata,
    data: tddata
  }
};
