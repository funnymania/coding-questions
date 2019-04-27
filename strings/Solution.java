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
}