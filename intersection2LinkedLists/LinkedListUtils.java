class LinkedListUtils {
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) {
        return null;
    }
    int len1 = 0;
    int len2 = 0;
    ListNode traverse1 = headA;
    while(traverse1 != null) {
        len1++;
        traverse1 = traverse1.next;
    }
    
    ListNode traverse2 = headB;
    while(traverse2 != null) {
        len2++;
        traverse2 = traverse2.next;
    }
    
    traverse1 = headA;
    traverse2 = headB;
    while (len1 > len2) {
        len1 -= 1;
        traverse1 = traverse1.next;
    }
    while (len2 > len1) {
        len2 -= 1;
        traverse2 = traverse2.next;
    }
    
    while (traverse1 != null) {
        if (traverse1.val == traverse2.val) {
            return traverse1;
        } 
        traverse1 = traverse1.next;
        traverse2 = traverse2.next;
    }
    
    return null;
  }
}