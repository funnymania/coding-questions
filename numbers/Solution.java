/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */

class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode trav = new ListNode(0);
    ListNode head = trav;
    trav.next = null;

    int carryTheOne = 0;
    while (l1 != null && l2 != null) {
      int res = l1.val + l2.val + carryTheOne;

      if (res > 9) {
        trav.next = new ListNode(res - 10);
        trav.next.next = null;
        carryTheOne = 1;
      } else {
        trav.next = new ListNode(res);
        trav.next.next = null;
        carryTheOne = 0;
      }
      trav = trav.next;
      l1 = l1.next;
      l2 = l2.next;
    }

    // Move over the other ones.
    if (l1 == null && l2 == null && carryTheOne == 1) {
      trav.next = new ListNode(1);
      trav.next.next = null;
    } else {
      while (l1 != null) {
        int res = l1.val + carryTheOne;
        if (res > 9) {
          trav.next = new ListNode(res - 10);
          carryTheOne = 1;
        } else {
          trav.next = new ListNode(res);
          carryTheOne = 0;
        }
        trav.next.next = null;
        trav = trav.next;
        l1 = l1.next;
      }
      while (l2 != null) {
        int res = l2.val + carryTheOne;
        if (res > 9) {
          trav.next = new ListNode(res - 10);
          carryTheOne = 1;
        } else {
          trav.next = new ListNode(res);
          carryTheOne = 0;
        }
        trav.next.next = null;
        trav = trav.next;
        l2 = l2.next;
      }

      if (carryTheOne == 1) {
        trav.next = new ListNode(1);
        trav.next.next = null;
      }
    }

    return head.next;
  }
}