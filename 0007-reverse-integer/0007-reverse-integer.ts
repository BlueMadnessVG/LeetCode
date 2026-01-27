function reverse(x: number): number {
    let isNegative = false;

    if (x < 0) {
        isNegative = true;
        x *= -1;
    }
    
    let res: number = 0
    while (x > 0) {
        res = (res * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    if (res > Math.pow(2, 31) - 1) {
        return 0;
    }

    return isNegative ? -res : res;
};