const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

// async function insert(hobbit) {
 function insert(employee) {
 return db('employee')
 .insert(employee, 'id')
 .then(ids => {
   return db('employee')
   .where({id: ids[0]})
   .first();
 });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
 return db('employee')
 .where({id})
 .del();
}

function getAll() {
  return db('employee');
}

function findById(id) {
  return db('employee')
    .where({ id })
    .first();
}
