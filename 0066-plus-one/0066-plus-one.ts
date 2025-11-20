function plusOne(digits: number[]): number[] {
    let num: bigint = 0n;

    for (let i = 0; i < digits.length; i++) {
        num = (num * 10n) + BigInt(digits[i]);
    }

    return Array.from(String(num + 1n), Number);
};