class TreeUtils {
    public TreeNode lowestCommonAncestor(
      TreeNode root, 
      TreeNode p, 
      TreeNode q
    ) {
      if (p.val < q.val) {
          return helper(root, p, q);
      } else {
          return helper(root, q, p);
      }
    }
    
    public TreeNode helper(
      TreeNode root,
      TreeNode least,
      TreeNode greater
    ) {
      if (root == null) {
          return null;
      }
      
      if (least.val < root.val && greater.val < root.val) {
          helper(root.left, least, greater);
      } else if (least.val > root.val && greater.val > root.val) {
          helper(root.right, least, greater);
      }
      
      return root;
    }
}

class TreeNode {
  TreeNode left;
  TreeNode right;
  int val;
  TreeNode(int x) {
    val = x;
  }
}