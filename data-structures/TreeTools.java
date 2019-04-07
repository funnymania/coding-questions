class TreeTools {
  // TODO These methods revolve around an unbalanced, non-ordered tree.
  //      Maybe look into working these for a different tree. 
  public static TreeNode findLeftmostNode(TreeNode head, int value) {
    if (head == null || head.val == value) {
      return head;
    } 
    TreeNode leftChild = null;
    TreeNode rightChild = null;
    if (head.left != null) {
      leftChild = findLeftmostNode(head.left, value);
    }
    if (head.right != null && leftChild == null) {
      rightChild = findLeftmostNode(head.right, value);
    }
    if (leftChild != null) {
      return leftChild;
    } 
    if (rightChild != null) {
      return rightChild;
    }

    return null;
  }

  public static TreeNode removeNode(TreeNode head, int value) {
    if (head == null) {
      return null;
    }
    if (head.val == value) {
      if (head.left == null && head.right == null) {
        return null;
      } else if (head.left == null && head.right != null) {
        return head.right;
      } else if (head.right == null && head.left != null) {
        return head.left;
      } else {
        // Let's just replace with this node the least of the right subtree.
        head.val = findMinimumValue(head.right);

        removeNode(head.right, head.val);

        return head;
      }
    } else {
      if (head.left != null) {
        head.left = removeNode(head.left, value);
      }
      if (head.right != null) {
        head.right = removeNode(head.right, value);
      }
      return head;
    }
  }

  public static int findMinimumValue(TreeNode head) {
    TreeNode traverse = head;
    int minimum = head.val;
    while (traverse.left != null) {
      traverse = traverse.left;
      minimum = traverse.val;
    }
    return minimum;
  }
}