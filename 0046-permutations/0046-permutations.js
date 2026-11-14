/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [nums.slice()];
    }
    
    var res = [];

    for (var i = 0; i < nums.length; i++) {
        var n = nums.shift();
        var perms = permute(nums.slice());

        for (var p of perms) {
            p.push(n);
        }
        
        res.push(...perms);
        nums.push(n);
    }
    
    return res;  
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna