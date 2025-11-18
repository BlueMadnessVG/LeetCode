function removeDuplicates(nums: number[]): number {
    let i = 1;

    for ( let l = 1; l < nums.length; l++ ) {
        if (nums[l] !== nums[i - 1]) {
            nums[i] = nums[l];
            i++;
        }
    }

    return i;
};