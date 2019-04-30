import java.util.HashMap;

class Solution {
  public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> hm = new HashMap<>();
    int maxCount = 0;
    int curCount = 0;
    for (int i = 0; i < s.length(); i++) {
      if (!hm.containsKey(s.charAt(i))) {
        hm.put(s.charAt(i), i);
        curCount++;
        if (curCount > maxCount) {
          maxCount = curCount;
        }
      } else {
        i = hm.get(s.charAt(i));
        hm.clear();
        if (curCount > maxCount) {
          maxCount = curCount;
        }
        curCount = 0;
      }
    }
    return maxCount;
  }

  // Initial solution, does not cover definition of palindrome
  // including zero string dividers.
  // Ex. abba is not a palindrome 
  // Ex. aabaa is a palindrome
  // Ex. b is a palindrome
  // Ex. aaccaa is not a palindrome
  public String longestPalindrome(String a) {
    int pivot = a.length() / 2;
    int lo = 0;
    int hi = (pivot * 2) + 1;
    
    StringBuilder s = new StringBuilder(a);
    
    while (lo < s.length()) {
      if (hi > s.length()) {
        pivot -= 1;
        lo = 0;
        hi = (pivot * 2) + 1;
      } else {
        String one = s.substring(lo, lo + pivot + 1);
        String two = s.substring(lo + pivot, hi);
        StringBuilder temp = new StringBuilder(two);
        String revtwo = temp.reverse().toString();
        if (one.equals(revtwo)) {
          String result = one + two.substring(1);
          return result;
        } else {
          lo += 1;
          hi += 1;
        }
      }
    }
    
    return "";
    // Or, throw IllegalArgumentException
  }
}