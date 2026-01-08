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

function getDepth(node: TreeNode): number {
    let depth = 0;

    while(node) {
        node = node.left;
        depth++;
    }

    return depth
}

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;

    const leftCount = getDepth(root.left);
    const rightCount = getDepth(root.right);

    if (leftCount === rightCount) {
        return (1 << leftCount) + countNodes(root.right);
    } else {
        return (1 << rightCount) + countNodes(root.left);
    }
};