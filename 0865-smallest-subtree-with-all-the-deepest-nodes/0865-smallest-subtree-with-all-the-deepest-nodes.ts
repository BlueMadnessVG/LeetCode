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

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const parent = new Map();
    const queue = [];
    queue.push(root);
    parent.set(root, null);

    let lastLevel = [];

    while(queue.length > 0) {
        const size = queue.length;
        lastLevel = [];

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            lastLevel.push(node);

            if (node.left) {
                parent.set(node.left, node);
                queue.push(node.left);
            }
            if (node.right) {
                parent.set(node.right, node);
                queue.push(node.right);
            }
        }
    }

    let deepest = new Set(lastLevel);

    while (deepest.size > 1) {
        const next = new Set();
        for (const node of deepest) {
            next.add(parent.get(node));
        }
        deepest = next;
    }

    return deepest.values().next().value;

};