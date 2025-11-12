function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 1) return strs[0];

    const currentStr = strs[0];
    let prefix = "";

    for(let i = 0; i < currentStr.length; i++ ) {
        for(let x = 1; x < strs.length; x++) {
            if (!(strs[x].charAt(i) == currentStr.charAt(i))) {
                return prefix;
            }
        }

        prefix += currentStr[i];
    }

    return prefix;
};