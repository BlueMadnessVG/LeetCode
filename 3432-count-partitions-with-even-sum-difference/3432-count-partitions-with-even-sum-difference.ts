function countPartitions(nums: number[]): number {
    return nums.reduce((r, l) => r + l, 0) & 1 ? 0 : nums.length - 1;
};