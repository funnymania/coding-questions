// DFS on an adjacency list
function DFS(aNode, target, memo) {
  memo[aNode.id] = true

  if (aNode.id == target) {
    return aNode
  }
  for (let node of aNode.adjList) {
    if (memo[node.id] == undefined) {
      let result = DFS(node, target, memo)
      if (result != null) return result;
    }
  }
  return null
}

let n1 = {}
n1.id = 1
let n2 = {}
n2.id = 2
let n3 = {}
n3.id = 3
let n4 = {}
n4.id = 4
let n5 = {}
n5.id = 5
let n6 = {}
n6.id = 0

n1.adjList = [n3, n4]
n2.adjList = [n1]
n3.adjList = [n2, n4]
n4.adjList = []
n5.adjList = []
n6.adjList = [n1, n4, n5]


console.assert(DFS(n6, 7, {}) == null, "This should not be found")
console.assert(DFS(n6, 3, {}) == n3, "This should be found")
