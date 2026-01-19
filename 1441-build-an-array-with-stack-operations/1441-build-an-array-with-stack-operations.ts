function buildArray(target: number[], n: number): string[] {
     const result: string[] = [];
    let i = 0;

    for (let x = 1; x <= n; x++) {
        result.push("Push");

        if (i < target.length && x === target[i]) {
            i++;
            if (i === target.length) {
                break;
            }
        } else {
            result.push("Pop");
        }
    }

    return result;
};