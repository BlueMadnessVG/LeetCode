function reverse(x: number): number {
    let revers: number = 0;
    let isNegative = false;

    if (x < 0) {
        isNegative = true;
        x = x * -1;
    } 

    while(x > 0) {
        revers = revers * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    if (revers > Math.pow(2, 31) - 1) return 0;
    
    return isNegative ? -revers : revers;
};