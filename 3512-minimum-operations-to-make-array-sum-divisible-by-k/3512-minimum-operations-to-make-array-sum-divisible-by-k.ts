function minOperations(nums: number[], k: number): number {
    let ops = 0;
    for(let i=0; i < nums.length; i++ ) ops += nums[i];
    return ops % k;
};