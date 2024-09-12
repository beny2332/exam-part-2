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

const Mission4 = (arr) => {
    if (arr.length <= 1) return 0
    let isAscending = true
    let isDescending = true
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            isDescending = false
        }
        if (arr[i] > arr[i + 1]) {
            isAscending = false
        }
        if(!isAscending && !isDescending) {
            return 0
        }
    }
    if (isAscending) return 1
    
    else if (isDescending) return 2
    
    else return 0
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}





