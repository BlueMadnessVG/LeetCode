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

function maxLevelSum(root: TreeNode | null): number {
    if (root === null) return 0;

    const queue = [];
    queue.push(root);

    let level = 1;
    let maxLevel = 1;
    let maxSum = -Infinity;

    while (queue.length > 0) {
        const size = queue.length;
        let levelSum = 0;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            levelSum += node.val;

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = level;
        }

        level++;
    }

    return maxLevel;
};