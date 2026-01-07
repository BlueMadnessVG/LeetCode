/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const mod = 1_000_000_007n;
let diff: bigint;
let total: bigint;

function dfs(root: TreeNode | null, computeAns = false): bigint {
    if (!root) return 0n;

    const sum =
        BigInt(root.val) +
        dfs(root.left, computeAns) +
        dfs(root.right, computeAns);

    if (computeAns) {
        const currentDiff = sum * 2n - total;
        const absDiff = currentDiff < 0n ? -currentDiff : currentDiff;
        if (absDiff < diff) {
            diff = absDiff;
        }
    }

    return sum;
}

function maxProduct(root: TreeNode | null): number {
    diff = BigInt(Number.MAX_SAFE_INTEGER);
    total = 0n;

    total = dfs(root);
    dfs(root, true);

    const result =
        ((total - diff) / 2n) *
        ((total + diff) / 2n) %
        mod;

    return Number(result);
}