function shuffle(nums: number[], n: number): number[] {
    let ans = new Array(n);
    let j = 0;

    for (let i = 0; i < n; i++) {
        ans[j++] = nums[i];
        ans[j++] = nums[i + n]; 
    }

    return ans;
};