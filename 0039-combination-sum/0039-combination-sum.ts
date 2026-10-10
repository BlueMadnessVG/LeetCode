var combinationSum = function(candidates, target) {
    const res = [];

    function makeCombination(idx, comb, total) {
        if (total === target) {
            res.push([...comb]);
            return;
        }

        if (total > target || idx >= candidates.length) {
            return;
        }

        comb.push(candidates[idx]);
        makeCombination(idx, comb, total + candidates[idx]);
        comb.pop();
        makeCombination(idx + 1, comb, total);
    }

    makeCombination(0, [], 0);
    return res;    
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna