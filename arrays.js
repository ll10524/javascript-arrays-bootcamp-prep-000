var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var newArray = array;
  newArray.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element) {
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  
  newArray.push(element);
  return newArray;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
  
}