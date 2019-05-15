import java.util.HashMap;

class Solution {

  public int stringToIntegerAtoi(String str) {
    int sign = 1;
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
    
    storage *= sign;
    
    // return integer
    if (storage > Integer.MAX_VALUE) {
      return Integer.MAX_VALUE;
    } else if (storage < Integer.MIN_VALUE) {
      return Integer.MIN_VALUE;
    } else {
      return storage.intValue(); 
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

  // Updated, gross one. Untested. 
  public String longestPalindrome(String a) {
    if (s.length() == 0 || s.length() == 1) return s;
    
    int curLength = s.length();
    while (curLength > 1) {
      for (int i=0; i+curLength<=s.length(); i++) {
        if (curLength % 2 == 1) {
          String test1 = s.substring(i, curLength / 2);
          String test2 = s.substring((curLength / 2) + 1, curLength);
          StringBuilder test3 = new StringBuilder(test2);
          test3.reverse();
          if (test1 == test3.toString()) {
            return s.substring(i, curLength);
          }
        } else {
          String test1 = s.substring(i, curLength / 2);
          String test2 = s.substring((curLength / 2), curLength);
          StringBuilder test3 = new StringBuilder(test2);
          test3.reverse();
          if (test1 == test3.toString()) {
            return s.substring(i, curLength);
          }
        }
      }
      curLength--;  
    }
    return s.substring(0,1);
  }
}