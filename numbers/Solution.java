/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
import java.lang.Integer;

class Solution {

  // TODO: Cover integer overflow
  // Given a 32-bit signed integer, reverse digits of an integer.
  //
  // Example 1:
  // 
  // Input: 123
  // Output: 321
  // 
  // Example 2:
  // 
  // Input: -123
  // Output: -321
  // 
  // Example 3:
  // 
  // Input: 120
  // Output: 21
  // 
  // Note:
  // Assume we are dealing with an environment which could only store integers within 
  // the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, 
  // assume that your function returns 0 when the reversed integer overflows.
  public int reverseInteger(int x) {
    int result = 0;
    Double heldResult = 0.0;
    boolean isNegative = (x < 0);
    int digitCnt = 0;
      
    if (x < 10 && x > -10) {
      return x;
    }
    
    x = Math.abs(x);
    
    // Find highest 10^n that is > x
    int tenCap = 1;
    while (tenCap <= x) {
      tenCap *= 10;
    }
    
    tenCap /= 10;
    // Create a list to store integer. 
    ArrayList<Integer> storedNum = new ArrayList<>();
    
    for (int i = tenCap; i > 0; i /= 10) {
      int importantNumber = x / i;
      storedNum.add(importantNumber);
      x -= importantNumber * i;
    }

    // Remove leading zeroes.
    if (storedNum.get(storedNum.size() - 1) == 0) {
      storedNum.remove(storedNum.size() - 1);
    }
    
    for (int i = storedNum.size() - 1; i >= 0; i--) {
      heldResult += Math.pow(10, i) * storedNum.get(i);
    }

    // Take care of overflow...
    if (heldResult > Integer.MAX_VALUE
       || heldResult < Integer.MIN_VALUE
    ) {
      return 0;
    } else {
      return isNegative
        ? heldResult.intValue() * -1
        : heldResult.intValue();
    }
  }

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