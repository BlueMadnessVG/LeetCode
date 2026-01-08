function maxDotProduct(nums1: number[], nums2: number[]): number {
    if (nums1.length < nums2.length) return maxDotProduct(nums2, nums1);

    const n1 = nums1.length;
    const n2 = nums2.length;

    const NEG_INF = Number.MIN_SAFE_INTEGER;

    const dp: number[][] = [
        new Array(n2 + 1).fill(NEG_INF),
        new Array(n2 + 1).fill(NEG_INF),
    ]

    let res = NEG_INF;

    for (let i = n1 - 1; i >= 0; i--) {
        const curr = i & 1;
        const next = (i + 1) & 1;

        for (let j = n2 - 1; j >= 0; j--) {
            const product = nums1[i] * nums2[j];

            let best = product;

            if (i + 1 < n1 && j + 1 < n2) {
                best = Math.max(best, product + dp[next][j + 1]);
            }
            best = Math.max(best, dp[curr][j + 1]);
            best = Math.max(best, dp[next][j]);
            dp[curr][j] = best;
            res = Math.max(res, best);
        }
    }

    return res;
};