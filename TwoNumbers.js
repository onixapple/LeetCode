var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0)
    let head = List
    let sum = 0
    let acc = 0

    while( l1 !== null || l2 !== null || sum !== 0 ){

        if(l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }

        if(l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        if(sum >= 10) {
            sum = sum - 10
            acc = 1
        }

        head.next = new ListNode(sum)
        head = head.next
        sum = acc
        acc = 0

    }
}