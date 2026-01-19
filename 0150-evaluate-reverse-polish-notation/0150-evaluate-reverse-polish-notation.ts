function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            const b = stack.pop()!;
            const a = stack.pop()!;

            let res: number;

            switch(token) {
                case '+':
                    res = a + b;
                    break;
                case '-':
                    res = a - b;
                    break;
                case '*':
                    res = a * b;
                    break;
                case '/':
                    res = Math.trunc(a / b);
                    break;
            }

            stack.push(res);
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};