export let sum = function(a, b) {
  return a + b;
}

let calculator = {
  sum: sum,
  dif: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b
  }
}

export default calculator;