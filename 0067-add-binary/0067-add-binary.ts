function addBinary(a: string, b: string): string {
    let carry = 0;
    let binSum = "";
    let i = a.length - 1;
    let j = b.length - 1

    while( i >= 0 || j >= 0 || carry ) {
        let sum = carry;
        if ( i >= 0 ) sum += parseInt(a[i]);
        if ( j >= 0 ) sum += parseInt(b[j]);

        binSum = ( sum % 2 ) + binSum;
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return binSum;
};