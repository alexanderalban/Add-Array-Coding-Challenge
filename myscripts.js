const exampleArray = [2, 5, 6, 7, 9]

const addOneWithSum = (ourArray) => {
  let newList = []
  let sum = 0
  for (let i = 0; i < ourArray.length; i++) {
    sum += (ourArray[i] + 1)
    newList.push(ourArray[i] + 1)
  }
  return newList + ' ' + sum
}

addOneWithSum(exampleArray)