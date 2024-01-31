function fibonacci(num) {
  let answer = []
  for (let i = 0; i <= num; i++){
    if (i === 0){
      answer.push(i)
    } 
    else if (i === 1){
      answer.push(i)
    }
    else{
      answer.push(answer[i-1] + answer[i-2])
    }
  }
  return answer[num] 
}
module.exports = fibonacci;
console.log(fibonacci(7))

//test are based on a zero indexed fibonacci sequence
