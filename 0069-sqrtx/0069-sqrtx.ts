function mySqrt(x: number): number {
    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if( square == x ) return mid;
        else if (square < x) left = mid + 1;
        else right = mid - 1;
    }

    console.log(right);
    return right;
};