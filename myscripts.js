const arr = [2, 5, 6, 7, 9]

const addOne = (newArray) => {
    let newList = [];
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
        sum += (newArray[i] + 1);
        console.log('sum = ', sum);
        newList.push(newArray[i] + 1)
        console.log("newList =", newList);
    }
    return newList + ' ' + sum
}

addOne(arr);