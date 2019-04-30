import java.util.HashMap;

class Solution {

  // TODO: Cover Integer buffer overflows.
  public int stringToIntegerAtoi(String str) {
    int sign = 1;
    char carry = ' ';
    boolean signSet = false;
    
    // scan until ' ' gone.
    int i = 0;
    while(i < str.length()) {
      Character checkMe = str.charAt(i);
      
      if (signSet) {
        if (!Character.isDigit(checkMe)) {
          return 0;
        } else {
          break;
        }
      } else {
        if (checkMe == ' ') {
          ;
        }
        else if (checkMe == '-') {
          sign = -1;
          signSet = true;
        } else if (checkMe == '+') {
          signSet = true;
        } else if (!Character.isDigit(checkMe)) {
          return 0;
        } else {
          break;
        }
      }
      i += 1;
    }
    
    if (i == str.length()) {
      return 0;
    }
    
    List<Integer> tmpStorage = new ArrayList<>();
    
    // scan all values which are numbers until non-number reached
    while (i < str.length()) {
      Character checkMe = str.charAt(i);
      if (Character.isDigit(checkMe)) {
        tmpStorage.add(checkMe - '0');
      } else {
        break;
      }
      i += 1;
    }
    
    // if string contained numbers is empty, return 0
    if (tmpStorage.isEmpty()) {
      return 0;
    }
    
    // convert string to integer
    Double storage = 0.0;
    int powCount = 0;
    for (int j = tmpStorage.size() - 1; j >= 0; j--) {
      storage += tmpStorage.get(j) * Math.pow(10, powCount);
      powCount += 1;
    }
    
    // return integer
    if (storage > Integer.MAX_VALUE) {
      return Integer.MAX_VALUE;
    } else if (storage < Integer.MIN_VALUE) {
      return Integer.MIN_VALUE;
    } else {
      return storage.intValue() * sign; 
    }
  }

  // The string "PAYPALISHIRING" is written in a zigzag pattern on a given number 
  // of rows like this: (you may want to display this pattern in a fixed font for 
  // better legibility)

  // P   A   H   N
  // A P L S I I G
  // Y   I   R

  // And then read line by line: "PAHNAPLSIIGYIR"

  // Write the code that will take a string and make this conversion given a 
  // number of rows
  public String zigzagConversion(String s, int numRows) {
    List<List<Character>> zigzag = new ArrayList<>();
    
    // Init rows.
    for (int i = 0; i < numRows; i++) {
      List<Character> newRow = new ArrayList<>();
      zigzag.add(newRow);
    }
    
    int i = 0;
    int j = 0;
    int z = 0;
    while (z < s.length()) {
      for (j = 0; j < numRows && z < s.length();) {
        zigzag.get(j).add(s.charAt(z));
        z += 1;
        j += 1;
      }
      j -= 2;
      while (j > 0 && z < s.length()) {
        zigzag.get(j).add(s.charAt(z));
        z++;
        j--;
      }
    }
    
    char[] charResult = new char[s.length()];
    
    z = 0;
    for (int k = 0; k < numRows; k++) {
      for (int l = 0; l < zigzag.get(k).size(); l++) {
        charResult[z] = zigzag.get(k).get(l);
        z += 1;
      }
    }
    
    return new String(charResult);
  }

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