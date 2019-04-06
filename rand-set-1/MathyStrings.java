class MathyStrings {
  // TODO account for overflows / underflows
  public static String multiply2Strings (String num1, String num2) {
    int first = Integer.parseInt(num1);
    int second = Integer.parseInt(num2);

    int res = first * second;

    return Integer.toString(res);
  }
}
