function countPartitions(nums: number[]): number {
    return nums.reduce((acumulation, i) => acumulation + i, 0) & 1 ? 0 : nums.length - 1;
};