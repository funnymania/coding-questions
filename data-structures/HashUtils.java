class HashUtils {

  public static String hashSwitchCharsOfTwoStrings(String one, String two) {
    String both = one + two;
    char[] hashedBoth = both.toCharArray();
    char stock;

    for (int i = 0; i < both.length() - 1 - i; i++) {
      stock = hashedBoth[i];
      hashedBoth[i] = hashedBoth[both.length() - 1 - i];
      hashedBoth[both.length() - 1 - i] = stock;
    }

    return new String(hashedBoth);
  }
}