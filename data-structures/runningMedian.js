/// Left and Right will point to the same node when cnt is odd
class Root {
    list
    left
    right
    cnt
    median
    
    constructor(val) {
        this.list = new Node(val)
        this.left = this.list
        this.right = this.list
        this.cnt = 1
        this.median = val
    }
    
    add(num) {
        let follow = this.list.next
        let prev = this.list
        let willBeOdd = this.cnt % 2 == 0 ? true : false;
        console.log(`${num} + ${prev.val}`)
        
        if (num < prev.val) {
            let addMe = new Node(num)
            addMe.next = prev
            prev.prev = addMe
            this.list = addMe
            
            if (this.cnt == 1) {
                this.left = addMe
                this.right.prev = addMe
                this.median = (this.left.val + this.right.val) / 2
                this.cnt += 1
                return;
            } 
            
            if (willBeOdd) {
                this.median = this.left.val
                this.right = this.left
            } else {
                this.left = this.left.prev
                this.median = (this.left.val + this.right.val) / 2
            }
            
            this.cnt += 1
            return;
        }
        
        while (follow != null) {
            console.log('forever...')
            if (num > prev.val && num <= follow.val) {
                let addMe = new Node(num)
                
                prev.next = addMe
                follow.prev = addMe
                addMe.next = follow
                addMe.prev = prev
                
                if (willBeOdd) {
                    if (num < this.right.val && num > this.left.val) {
                        this.median = num 
                        this.left = addMe
                        this.right = addMe
                    } else if (num > this.right.val) {
                        this.median = this.right.val
                        this.left = this.left.next
                    } else if (num < this.left.val) {
                        this.median = this.left.val
                        this.right = this.right.prev
                    }
                } else {
                    if (num < this.median) {
                        this.left = this.left.prev
                        this.median = (this.right.val + this.left.val) / 2
                    } else {
                        this.right = this.right.next
                        this.median = (this.left.val + this.right.val) / 2
                    }
                }
                this.cnt += 1
                return;
            }
            
            prev = follow
            follow = follow.next
        }
        
        // Added to end
        if (willBeOdd) {
            let addMe = new Node(num)
            prev.next = addMe
            addMe.prev = prev
            this.left = this.left.next
            this.median = this.left.val
        } else {
            // 4 5 [6] 7 x
            // 4 [5 6] 7
            let addMe = new Node(num)
            prev.next = addMe
            addMe.prev = prev
            this.right = this.right.next
            this.median = (this.left.val + this.right.val) / 2
        }
        
        this.cnt += 1        
    }
}

/// Sorted Doubly-LL of numbers
class Node {
    next
    prev
    
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

/// RunningMedian may need to traverse the entire list, so O(n) per add.
const runningMedian = function (a) {
    let res = []
    let root = new Root(a[0])
    res.push(a[0])
    for (let i = 1; i < a.length; i++) {
        // Add to sorted list
        root.add(a[i])
        
        // Add median
        res.push(root.median)
    }
    
    return res
}

export { runningMedian }
