function fibonacci(num) {
// your code here
	
    if (num === 0) return 0;
    if (num === 1) return 1;

    let prevPrev = 0;
    let prev = 1;
    let current = 1;

    for (let i = 2; i < num; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return prevPrev;

}

module.exports = fibonacci;
