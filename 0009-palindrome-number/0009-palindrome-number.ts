function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    let reverse: number = 0;
    let xCopy: number = x; 
    
    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === xCopy;
};