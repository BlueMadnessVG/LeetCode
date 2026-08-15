function lengthOfLongestSubstring(s: string): number {
    let arr = new Array(128).fill(false);
    let l = 0, r = 0, maxLen = 0;

    while (r < s.length) {
        if (!arr[s.charCodeAt(r)]) {
            arr[s.charCodeAt(r)] = true;
            maxLen = Math.max(maxLen, r - l + 1);
            r++;
        } else {
            arr[s.charCodeAt(l)] = false;
            l++;
        }
    }
    return maxLen;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna