function findMaxConsecutiveOnes(nums: number[]): number {
    let ans = 0;
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
        }
        else {
            ans = Math.max(ans, counter);
            counter = 0;
        }
    }

    return Math.max(ans, counter);
};