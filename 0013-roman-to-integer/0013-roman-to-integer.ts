function romanToInt(s: string): number {
    const romanCharacters = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let sum: number = 0;

    for (let i = 0; i < s.length; i++) {
        const current: number = romanCharacters.get(s[i]);
        const next: number = romanCharacters.get(s[i + 1]) ?? 0;

        if (current < next) {
            sum -= current;
        } else {
            sum += current;
        }
    }

    return sum;
};