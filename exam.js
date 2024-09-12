const Mission1 = (arr) => {
    newEvenArr = arr.filter(num => num % 2 === 0);
  return newEvenArr;
}

const Mission2 = (str) => {
    const arr = str.split(" ")
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            result += 1;
        }
    }
    return result
}

const Mission3 = (arrToConvert) =>{
    let newArr = []
    for (let i = 0; i < arrToConvert.length; i++) {
        newArr = newArr.concat(arrToConvert[i])
    }
    return newArr
}





