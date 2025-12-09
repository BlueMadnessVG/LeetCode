function specialTriplets(nums: number[]): number {
    const MOD = 1e9 + 7;
    let n = nums.length;
    let ans = 0;

    const leftCount = new Map<number, number>();
    const rightCount = new Map<number, number>();

    for(const num of nums) {
        rightCount.set(num, (rightCount.get(num) || 0) + 1);
    }

    for(let j = 0; j < n; j++) {
        const current = nums[j];

        rightCount.set(current, (rightCount.get(current) || 0) - 1);
        const target = current * 2;
        const left = leftCount.get(target) || 0;
        const right = rightCount.get(target) || 0;

        ans = (ans + left * right) % MOD;
        leftCount.set(current, (leftCount.get(current) || 0) + 1);
    }

    return ans;
};