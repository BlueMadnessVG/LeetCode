/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

var removeNthFromEnd = function(head, n) {
    let res = new ListNode(0, head);
    let dummy = res;

    for (let i = 0; i < n; i++) {
        head = head.next;
    }

    while (head) {
        head = head.next;
        dummy = dummy.next;
    }

    dummy.next = dummy.next.next;

    return res.next;    
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna