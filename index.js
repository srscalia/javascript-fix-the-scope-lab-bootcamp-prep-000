var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
<<<<<<< HEAD
  var animal = "cat";
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
=======
  var animal = "cat"
  return animal
}

function add2(n) {
  const two = 2
  return n + two
>>>>>>> 2a885c165aa5abfe2b773a67e1032b7807b343af
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();
