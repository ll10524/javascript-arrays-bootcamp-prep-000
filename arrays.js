var chocolateBars = []

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array;
  newArray.unshift(element);
  return Array;
}