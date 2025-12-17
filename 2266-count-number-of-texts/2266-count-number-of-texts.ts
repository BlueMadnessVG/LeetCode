function countTexts(pressedKeys: string): number {
    const MOD: number = 1_000_000_007;
    const n: number = pressedKeys.length;
    const dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1;

    for(let i = 1; i <= n; i++) {
        const char = pressedKeys[i - 1];
        const maxPresses = char === '7' || char === '9' ? 4 : 3;

        for (let len = 1; len <= maxPresses; len++) {
            if (i < len) break;
            if (pressedKeys[i - len] !== char) break;

            dp[i] = (dp[i] + dp[i - len]) % MOD;
        }
    }

    return dp[n];
};