function lengthOfLongestSubstring(s: string): number {
    let newStr = new Set();
    let left = 0;
    let largerStr: number = 0;

    for (let r = 0; r < s.length; r++) {
       let c = s[r];
       newStr[c] = ( newStr[c] || 0 ) + 1;
       
       while( newStr[c] > 1 ) {
        newStr[s[left]] -= 1;
        left++;
       }

       largerStr = Math.max(largerStr, r - left + 1);
    }

    return largerStr;
};