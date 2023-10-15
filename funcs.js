function isFive(num) {
  if (num === 5) {
    return true;
  } else if (typeof num !== "number") {
    return false
  } else {
    return false;
  }
}

function isOdd(number) {
  if (number % 2 === 0) {
    return false;
  } else if (typeof number !== "number") {
    throw new Error("Give me a Number");
  } else {
    return true;
  }
}

function myRange(min, max, step = 1) {
  let newarr = [];
  if (step === undefined) {
    for (let i=min; i <= max; i++) {
      newarr.push(i);
    }
    if (min > max) {
      return newarr;
    }
  } else {
    for (let i=min; i <= max; i += step) {
      newarr.push(i);
    }
  }
  return newarr;
}


module.exports = { isFive, isOdd, myRange };
