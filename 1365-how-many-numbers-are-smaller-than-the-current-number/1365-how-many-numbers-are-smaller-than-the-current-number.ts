function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sorted = [...nums].sort((a, b) => a - b);

    const indexMap = new Map<number, number>();

    for (let i = 0; i < sorted.length; i++){
        if (!indexMap.has(sorted[i])) {
            indexMap.set(sorted[i], i);
        }
    }

    return nums.map(num => indexMap.get(num)!);
};