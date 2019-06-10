// Using JS Map
function BFSusingMap(node, target) {
  let queue = []
  let hm = new Map()

  if (node.id == target) {
    return node;
  }

  hm.set(node.id, true)
  queue.push(node)

  while (queue.length != 0) {
    let nextNode = queue.shift()

    let adjList = nextNode.adjList
    for (let currentNode of adjList) {
      if (currentNode.id == target) {
        return currentNode;
      }

      if (hm.get(currentNode.id) == undefined) {
        hm.set(currentNode.id, true)
        queue.push(currentNode)
      }
    }
  }

  // Nothing found.
  return null;
}

// A table must be large enough to allow ~O(1) access for some domain, 
// but not so large that RAM is untenable...
// if we need, for instance, a billion possible values, that would be
// a Billion * 32 bit = 32 billion bits = 4 GB ram... ouch?!
// if our budget was more like 1 GB of ram, we could map to % 10**9.
// This is still constant time. It depends on what you have available. 
// If scale could raise to limitless levels, then compromises will need to
// be made and considerations will need to be established. 
function hashed(key) {
  return key % (10 ** 7);
}

// Here we will implement a hashtable that allows collision,
// and test for it. Using objects is waaay easier but we cannot quite
// GUARANTEE constant time or near-of. I have to imagine a clever company
// like Google found a way, though. @_@ 
// BUT ASSUMING THEY DID NOT. SINCE MY GOOGLE SEARCHES HAVE NOT INFORMED ME.
// BEHOLD A HASHMAP LALALALALALALA.
function BFSrealHashTable(node, target) {
  let queue = []
  let ht = []

  if (node.id == target) {
    return node;
  }

  hashedValue = hashed(node.id)
  if (ht[hashedValue] == undefined) {
    ht[hashedValue] = []
    ht[hashedValue].push(node.id)
  } else {
    ht[hashedValue].push(node.id)
  }

  queue.push(node)

  while (queue.length != 0) {
    let nextNode = queue.shift()

    let adjList = nextNode.adjList
    for (let currentNode of adjList) {
      if (currentNode.id == target) {
        return currentNode;
      }
      hashedValue = hashed(currentNode.id)
      if (ht[hashedValue] == undefined) {
        ht[hashedValue] = []
        ht[hashedValue].push(currentNode.id)
        queue.push(currentNode)
      } else {
        // Has this node been visited yet? 
        if (!ht[hashedValue].includes(currentNode.id)) {
          ht[hashedValue].push(currentNode.id)
          queue.push(currentNode)
        }
      }
    }
  }

  // Nothing found.
  return null;
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

console.assert(BFSrealHashTable(n6, 9) == null, "This should not be found")
console.assert(BFSrealHashTable(n6, 0) == n6, "This should be found")
console.assert(BFSrealHashTable(n6, 3) == n3, "This should be found")
