// Using bi-directional BFS, of sorts.
function RouteBtwnNodes(node1, node2) {
  let queue1 = []
  let queue2 = []

  let hm = new Map()

  if (node1 == node2) {
    return true
  }

  hm.set(node1.id, 'visited')
  hm.set(node2.id, "visited")

  queue1.push(node1.id)
  queue2.push(node2.id)

  while (queue1.length != 0) {
    let currentNode = queue[0]
    for (let el of currentNode.adjList) {
      if (
        hm.get(el.id) == undefined
        && queue2.includes(el.id)
      ) {
        return true;
      } else {
        queue1.push(...node1.adjList)
        queue1.shift()
      }
    }
    queue2.forEach((el) => {
      queue2.push(...el.adjList)
    })
  }

  return false;
}

let n0 = {}
n0.id = 0
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

n0.adjList = [n1, n4, n5]
n1.adjList = [n3, n4]
n2.adjList = [n1]
n3.adjList = [n2, n4]
n4.adjList = []
n5.adjList = []

console.assert(RouteBtwnNodes(n0, n3) == true,
  "This should be true")

console.assert(RouteBtwnNodes(n1, n5) == false,
  "This should be in tree")