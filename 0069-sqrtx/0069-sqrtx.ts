function mySqrt(x: number): number {
    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const squere = mid * mid;

        if (squere === x) return mid;
        else if (squere > x) right = mid - 1;
        else left = mid + 1; 
    } 

    return right;
};