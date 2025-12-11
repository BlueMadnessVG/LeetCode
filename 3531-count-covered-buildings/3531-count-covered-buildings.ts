function countCoveredBuildings(n: number, b: number[][]): number {
    const rmax: number[] = new Array(n + 1).fill(0);
    const rmin: number[] = new Array(n + 1).fill(n + 1);
    const cmax: number[] = new Array(n + 1).fill(0);
    const cmin: number[] = new Array(n + 1).fill(n + 1);

    for (const [x, y] of b) {
        rmax[y] = Math.max(rmax[y], x);
        rmin[y] = Math.min(rmin[y], x);
        cmax[x] = Math.max(cmax[x], y);
        cmin[x] = Math.min(cmin[x], y);
    }

    let ans = 0;

    for (const [x, y] of b) {
        if (rmin[y] < x && x < rmax[y] && cmin[x] < y && y < cmax[x]) {
            ans++;
        }
    }

    return ans;
};