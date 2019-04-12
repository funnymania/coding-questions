import java.util.Hashtable;
 
class Main {
  public static void main (String[] args) {
    // Create a generic tree, test some tools
    TreeNode root = new TreeNode(3);
    TreeNode left = new TreeNode(2);
    TreeNode right = new TreeNode(2);
    TreeNode leftRight = new TreeNode(7);
    TreeNode rightLeft = new TreeNode(9);

    root.left = left;
    root.right = right;
    left.right = leftRight;
    right.left = rightLeft;

    TreeNode foundNode = TreeTools.findLeftmostNode(root, 3);
    root = TreeTools.removeNode(root, foundNode.val);
    System.out.println(
      root.val
    );
    
    // Create a hash table for messages
    Hashtable<String, String> ht = new Hashtable<>();

    // username guarantees uniqueness, as we would only allow
    // one username per user. If you use the same secret twice,
    // you overwrite your previous message.
    String username = "Shine, Pickaw!";
    String secret = "bubblethought";
    String message = "garblesour";

    String key = HashUtils.hashSwitchCharsOfTwoStrings(username,secret);

    ht.put(key, message);
    System.out.println(
      ht.get(key) + " has key " + key
    );
  }
}