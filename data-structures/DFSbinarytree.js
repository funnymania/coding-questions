// Returns node of binary tree containing target, or null if not in tree
function dfsTree(root, target) {
  if (root == null) {
    return null
  }

  if (root.val == target) {
    return root
  }

  goLeft = dfsTree(root.left, target)
  if (goLeft == null) {
    goRight = dfsTree(root.right, target)
    if (goRight == null) {
      return null
    } else {
      return goRight
    }
  } else {
    return goLeft
  }
}

let root1 = {}
root1.val = 1

let root2 = {}
root2.val = 2

let root3 = {}
root3.val = 3

let root4 = {}
root4.val = 4

root1.left = root2
root1.right = root4

root2.left = root3
root2.right = null

root3.left = null
root3.right = null

root4.left = null
root4.right = null

// Test if value in tree.
console.assert(dfsTree(root1, 4) == null, "This value should be found in tree.")
