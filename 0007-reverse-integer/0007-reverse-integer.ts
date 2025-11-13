function reverse(x: number): number {
    let revers: number = 0;
    let xNumber: number = x;   
    let isNegative = false;

    if (x < 0) xNumber = xNumber * -1;

    while(xNumber > 0) {
        revers = revers * 10 + (xNumber % 10);
        xNumber = Math.floor(xNumber / 10);
    }

    if (x < 0) revers = revers * -1;
    if (revers > Math.pow(2, 31) - 1 || revers < -Math.pow(2, 31)) return 0;
    
    return revers;
};