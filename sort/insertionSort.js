function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        let j = i

        while (j > 0) {
            if (arr[j - 1] > temp) {
                arr[j] = arr[j - 1]
            } else {
                break
            }
            j--
        }

        arr[j] = temp
    }
    return arr
}

insertionSort([4, 6, 2, 1, 7])