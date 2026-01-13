function AreaGeqY(squares: number[][], y: number): number {
    let A = 0;

    for (const s of squares) {
      const L = s[2];
      const y0 = s[1] + L;

      if (y >= y0) continue;

      const h = Math.min(L, y0 - y);
      A += L * h;
    }

    return A;
  }

function separateSquares(squares: number[][]): number {
   const A0 = AreaGeqY(squares, -1e9);
    const half = A0 / 2;

    let minY = Number.POSITIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;

    for (const s of squares) {
      const L = s[2];
      const y0 = s[1];
      minY = Math.min(minY, y0);
      maxY = Math.max(maxY, y0 + L);
    }

    let l = minY;
    let r = maxY;
    const epsilon = 1e-5;

    while (r - l > epsilon) {
      const m = (l + r) / 2;
      const A = AreaGeqY(squares, m);

      if (A > half) {
        l = m;
      } else {
        r = m;
      }
    }

    return l;
};