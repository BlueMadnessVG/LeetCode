/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let si = 0, pi = 0, match = 0, star = -1;
    let sn = s.length, pn = p.length;
    while (si < sn) {
        if (pi < pn && (p[pi] === '?' || p[pi] === s[si])) {
            si++;
            pi++;
        } else if (pi < pn && p[pi] === '*') {
            star = pi;
            match = si;
            pi++;
        } else if (star !== -1) {
            pi = star + 1;
            match++;
            si = match;
        } else {
            return false;
        }
    }
    while (pi < pn && p[pi] === '*') {
        pi++;
    }
    return pi === pn;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna