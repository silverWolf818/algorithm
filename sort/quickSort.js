function quickSort(arr) {
    const rec = (n) => {
        if (n.length <= 1) return n
        const left = []
        const right = []
        const mid = n[0]
        for (let i = 1; i < n.length; i++) {
            if (n[i] < mid) {
                left.push(n[i])
            } else {
                right.push(n[i])
            }
        }
        return [...rec(left), mid, ...rec(right)]
    }
    return rec(arr)
}

console.log(quickSort([4, 6, 2, 1, 7]))