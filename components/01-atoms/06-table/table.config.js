'use strict';
const {faker} = require('@faker-js/faker');

const cols = 4;
const rows = 20;

const thdata = [];
const tddata = [];

for( var i = 0; i < cols; i++ ) {
  thdata.push({
    thcontent: faker.company.companyName()
  });
}

for( var i = 0; i < rows; i++ ) {
  tddata.push({
    one: faker.finance.transactionDescription(),
    two: faker.finance.transactionDescription(),
    three: faker.finance.transactionDescription(),
    four: faker.finance.transactionDescription()
  });
}


module.exports = {
  context: {
    tablehead: thdata,
    data: tddata
  }
};
