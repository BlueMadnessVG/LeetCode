function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        const target = -nums[i];
        const seen = new Set<number>();
        
        for (let j = i + 1; j < nums.length; j++) {
            const complement = target - nums[j];
            
            if (seen.has(complement)) {
                result.push([nums[i], complement, nums[j]]);
                while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
            }
            
            seen.add(nums[j]);
        }
    }
    
    return result;
}