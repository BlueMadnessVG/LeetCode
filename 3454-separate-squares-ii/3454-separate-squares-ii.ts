function unionLen(intervals: [number, number][]): number {
    intervals.sort((a, b) => a[0] - b[0]);

    let res = 0;
    let end = -1e30;

    for (const [a, b] of intervals) {
        if (a > end) {
            res += b - a;
            end = b;
        } else if (b > end) {
            res += b - end;
            end = b;
        }
    }
    return res;
}

function separateSquares(squares: number[][]): number {
    type Event = [number, number, number, number];
    const events: Event[] = [];

    for (const [x, y, l] of squares) {
        events.push([y, 1, x, x + l]);
        events.push([y + l, -1, x, x + l]);
    }

    events.sort((a, b) => a[0] - b[0]);

    let xs: [number, number][] = [];
    let prevY = events[0][0];
    let totalArea = 0;
    const areas: [number, number, number][] = [];

    for (const [y, type, x1, x2] of events) {
        if (y > prevY && xs.length > 0) {
            const h = y - prevY;
            const w = unionLen(xs);
            areas.push([prevY, h, w]);
            totalArea += h * w;
        }

        if (type === 1) {
            xs.push([x1, x2]);
        } else {
            const idx = xs.findIndex(
                ([a, b]) => a === x1 && b === x2
            );
            if (idx !== -1) xs.splice(idx, 1);
        }

        prevY = y;
    }

    const half = totalArea / 2;
    let acc = 0;

    for (const [y, h, w] of areas) {
        if (acc + h * w >= half) {
            return y + (half - acc) / w;
        }
        acc += h * w;
    }

    return 0.0;
};