function mergeSort(arr) {
    const rec = (n) => {
        if (n.length === 1) return n
        const mid = Math.floor(n.length / 2)
        const left = n.slice(0, mid)
        const right = n.slice(mid)
        const orderLeft = rec(left)
        const orderRight = rec(right)
        const res = []

        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else if (orderRight.length) {
                res.push(orderRight.shift())
            }
        }
        return res
    }

    return rec(arr)
}

mergeSort([4, 6, 2, 1, 7])