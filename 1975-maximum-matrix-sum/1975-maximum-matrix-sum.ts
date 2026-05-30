function maxMatrixSum(matrix: number[][]): number {
    let totalSum: number = 0;
    let neg: number = 0;
    let minAbs = Infinity;

    for (const row of matrix) {
        for (const v of row) {
            if (v < 0) neg++;
            const av = Math.abs(v);
            totalSum += av;
            minAbs = Math.min(minAbs, av);
        }
    }

    return neg % 2 === 0 ? totalSum : totalSum - 2 * minAbs;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna