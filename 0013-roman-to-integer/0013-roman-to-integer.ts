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

    for (let i = 0; i < s.length - 1; i++) {
        if ( romanCharacters.get(s[i]) < romanCharacters.get(s[i + 1]) ) {
            sum -= romanCharacters.get(s[i]);
        } else {
            sum += romanCharacters.get(s[i]);
        }
    }


    return sum + romanCharacters.get(s[s.length - 1]);
};