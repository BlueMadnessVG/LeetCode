function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) return s;
    
    let index = 0;
    let direction = 1;
    const rows: string[][] = new Array(numRows).fill(null).map(() => []);

    for (const char of s) {
        rows[index].push(char);

        if (index === 0) {
            direction = 1;
        } else if (index === numRows - 1) {
            direction = -1;
        }
        index += direction;
    }

    const result = rows.map(row => row.join('')).join('');
    return result;
};