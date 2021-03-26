function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
        }
        if (indexMin !== i) {
            // const temp = arr[i]
            // arr[i] = arr[indexMin]
            // arr[indexMin] = temp
            [arr[i],arr[indexMin]] = [arr[indexMin],arr[i]]
        }
    }
    return arr
}

selectionSort([4, 6, 2, 1, 7])
