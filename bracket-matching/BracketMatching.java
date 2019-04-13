import java.util.Stack;
import java.util.List;
import java.util.ArrayList;
class BracketMatching {
  public static boolean isBracketScopeValid(String code) {
    if (code == null) {
      return true;
    }

    Stack<Character> openingStack = new Stack<>();
    List<BracketPair> matching = new ArrayList<>();
    matching.add(new BracketPair('(',')'));
    matching.add(new BracketPair('{','}'));
    matching.add(new BracketPair('[',']'));

    if (isOpen(code.charAt(0), matching)) {
      openingStack.push(code.charAt(0));
    } else {
      return false;
    }

    for (int i = 1; i < code.length(); i++) {
      if (isOpen(code.charAt(i), matching)) {
        openingStack.push(code.charAt(i));
      } else if (
        !openingStack.isEmpty() 
        && findMatching(openingStack.peek(), matching) == code.charAt(i)
      ) {
        openingStack.pop();
      } else {
        break;
      }
    }

    return openingStack.isEmpty();
  }

  private static boolean isOpen(char input, List<BracketPair> list) {
    for (BracketPair item : list) {
      if (item.opening == input) {
        return true;
      }
    }
    return false;
  }

  private static char findMatching(char input, List<BracketPair> list) {
    for (BracketPair item : list) {
      if (item.opening == input) {
        return item.closing;
      }
    }
    return 'X';
  }
}