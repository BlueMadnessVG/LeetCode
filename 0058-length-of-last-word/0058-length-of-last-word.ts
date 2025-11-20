function lengthOfLastWord(s: string): number {
    let ans: number = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) == ' ' && ans > 0) return ans;
        else if (s.charAt(i) != ' ') ans++;
    }

    return ans;
};