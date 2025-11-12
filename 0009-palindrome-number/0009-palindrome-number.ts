function isPalindrome(x: number): boolean {
    let reverse: number = 0;
    let xNumber = x;

    while (x > 0) {
        reverse = reverse * 10 + ( x % 10 );
        x = Math.floor(x / 10);
    }

    return reverse === xNumber
};