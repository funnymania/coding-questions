class Main {
  public static void main(String[] args) {
    String test1 = "({})";
    String test2 = "({[})]";

    System.out.println(BracketMatching.isBracketScopeValid(test1));
    System.out.println(BracketMatching.isBracketScopeValid(test2));
  }
}