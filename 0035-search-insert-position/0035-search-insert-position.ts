function searchInsert(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    if( nums[0] > target ) {
        return 0;
    }
    
    while(left <= right) {
        let mid: number = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};