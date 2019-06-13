/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root == null) {
    return true
  }
  return helper(root.left, -Infinity, root.val) &&
    helper(root.right, root.val, Infinity)
};

var helper = function (root, min, max) {
  if (root == null) {
    return true
  }

  if (root.val > min && root.val < max) {
    return helper(root.left, min, root.val) &&
      helper(root.right, root.val, max)
  } else {
    return false
  }
};