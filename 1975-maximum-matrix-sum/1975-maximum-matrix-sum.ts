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