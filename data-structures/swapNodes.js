class Node {
    constructor(val) {
        this.val = val
        this.left = undefined
        this.right = undefined
    }
}

const swapNodes = function(indexes, queries) {
    let output = []
    let queue = []
    let root = new Node(1)
    queue.push(root)
    
    for (let i = 0; i < indexes.length; i++) {
        let cur = queue.shift()
        
        if (indexes[i][0] !== -1) {
            let left = new Node(indexes[i][0])
            cur.left = left
            queue.push(left)
        }
        
        if (indexes[i][1] !== -1) {
            let right = new Node(indexes[i][1])
            cur.right = right
            queue.push(right)
        }
    }
    
    const swapAtDepth = function (root, depth, query) {
        if (depth % query == 0) {
            let tmp = root.right
            root.right = root.left
            root.left = tmp
        }

        if (root.left !== undefined) 
            swapAtDepth(root.left, depth + 1, query)
        if (root.right !== undefined) 
            swapAtDepth(root.right, depth + 1, query)
    }
    
    const printTree = function(root, list) {
        if (root.left !== undefined) {
            printTree(root.left, list)
        }

        list.push(root.val)
        
        if (root.right !== undefined) {
            printTree(root.right, list)
        }
    }
    
    for (let query of queries) {
        let list = []
        swapAtDepth(root, 1, query)
        printTree(root, list)
        output.push(list)
    }
    
    return output;
}

export { swapNodes }
