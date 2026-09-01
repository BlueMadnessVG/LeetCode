var reverseKGroup = function(head, k) {
    if (!head) return null;

    let tail = head;
    for (let i = 0; i < k; i++) {
        if (!tail) return head;
        tail = tail.next;
    }

    function reverse(cur, end) {
        let prev = null;
        while (cur !== end) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    let newHead = reverse(head, tail);
    head.next = reverseKGroup(tail, k);
    return newHead;    
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna