// const stack = []
//
// stack.push(1)
// stack.push(2)
//
// const item1 = stack.pop()

const isValid = function(s) {
    const stack = []
    for(const i of s) {
        if(['(','[','{'].includes(i)) {
            stack.push(i)
        } else {
            const t = stack[stack.length - 1]
            if((t === '(' && i ===')') || (t === '[' && i ===']') || (t === '{' && i ==='}')) {
                stack.pop()
            }else {
                return false
            }
        }
    }
    return stack.length === 0
};

isValid("()")