const { Map } = require('immutable');

function getImmutableObject(input) {
  const immutableMap = Map(input);
  return immutableMap;
}

const inputObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const result = getImmutableObject(inputObject);
console.log(result);
