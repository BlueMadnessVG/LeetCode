function isValid(s: string): boolean {
    const stack = [];
    const mapping = new Map<string, string>([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);

    for (const character of s) {
        console.log(stack);
        if (mapping.has(character)) {
            stack.push(character);
        } else {
            const last = stack.pop();
            if (!last || mapping.get(last) !== character) {
                return false;
            }
        }
    }

    return stack.length === 0;
};