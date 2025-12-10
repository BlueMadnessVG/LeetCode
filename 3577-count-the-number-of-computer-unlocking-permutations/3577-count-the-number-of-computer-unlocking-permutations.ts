function countPermutations(complexity: number[]): number {
    const n = complexity.length;
    const first = complexity[0];
    const MOD = 1_000_000_007;

    for (let i = 1; i < n; i++) {
        if (complexity[i] <= first) return 0;
    }

    let fact = 1;
    for (let i = 2; i < n; i++) {
        fact = (fact * i) % MOD;
    }

    return fact;
};