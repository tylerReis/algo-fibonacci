function fibonacci(num) {
  if (num === 0){
    return 0
  }
  else if (num === 1){
    return 1
  }
  else {
  return fibonacci(num - 1) + fibonacci(num - 2)
  }
}
module.exports = fibonacci;
console.log(fibonacci(7))

//test are based on a zero indexed fibonacci sequence
