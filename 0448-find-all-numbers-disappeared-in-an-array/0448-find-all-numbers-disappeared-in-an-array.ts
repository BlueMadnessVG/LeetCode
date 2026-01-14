function findDisappearedNumbers(nums: number[]): number[] {
    const res: number[] = [];
    const n: number = nums.length

    for (let i = 0; i < n; i++) {
        const idx = Math.abs(nums[i]) - 1;
        if (nums[idx] > 0) {
            nums[idx] *= -1;
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }

    return res;
}; 