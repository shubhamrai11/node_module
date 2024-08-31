const stores = [
  {id: 1, name: 'nexa'},
  {id: 2, name: 'galaxy'},
  {id: 3, name: 'more'} 
];

// get id and provide store obj
function getStoreObjById(id){

  return stores.find(store => {
    return store.id == id
  });
  // [{id: 2, name: 'galaxy'}]
}

module.exports = getStoreObjById;