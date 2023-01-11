function printAllArraysNumbersByIndexes(paramArray) {
  paramArray.forEach((number, index) => {
    function translateNumbers(value) {
      if (value == 0) {
        return "first"
      }
      if (value == 1) {
        return "second"
      }
      if (value == 2) {
        return "third"
      }
      if (value == 3) {
        return "fourth"
      }
      if (value == 4) {
        return "fifth"
      }
    }

    console.log("This is the " + translateNumbers(index) + " value of you array " + number);
  })
}

let randomNumbers = [2, 3, 4, 1,3]
printAllArraysNumbersByIndexes(randomNumbers);