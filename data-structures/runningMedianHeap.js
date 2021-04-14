lass MinMaxHeap {
    max
    min
    
    constructor(val) {
        this.min = []
        this.max = []
        this.max.push(new Node(val))
    }
    
    getMedian() {
        if ((this.min.length + this.max.length) % 2 == 0) {
            return (this.min[0].val + this.max[0].val) / 2;
        } else {
            if (this.min.length > this.max.length) {
                return this.min[0].val
            } else {
                return this.max[0].val
            }
        }
    }
    
    balanceMinUp() {
        // If greater than parent, swap.
        let j = this.min.length - 1
        for (let i = Math.floor((j - 1) / 2); j > 0; i = Math.floor((j - 1) / 2)) {
            if (this.min[j].val < this.min[i].val) {
                let tmp = this.min[i]
                this.min[i] = this.min[j]
                this.min[j] = tmp
                j = i
            } else {
                break;
            }
        }
    }
    
    balanceMaxUp() {
        let j = this.max.length - 1
        for (let i = Math.floor((j - 1) / 2); j > 0; i = Math.floor((j - 1) / 2)) {
            if (this.max[j].val > this.max[i].val) {
                let tmp = this.max[i]
                this.max[i] = this.max[j]
                this.max[j] = tmp
                j = i
            } else {
                break;
            }
        }
    }

    add(num) {
        if (this.min.length == 0) {
            if (num > this.max[0].val) {
                this.min.push(new Node(num))
            } else {
                this.min.push(this.max.shift())
                this.max.push(new Node(num))
            }
            
            return;
        }
        
        if (num > this.max[0].val && num < this.min[0].val) {
            if (this.max.length >= this.min.length) {
                this.min.push(new Node(num))
                this.balanceMinUp()
            } else {
                this.max.push(new Node(num))
                this.balanceMaxUp()
            }
        } else if (num <= this.max[0].val) {
            // Add to end.
            this.max.push(new Node(num))
            this.balanceMaxUp()
        } else {
            // Add to end.
            this.min.push(new Node(num))
            this.balanceMinUp()
        }
        
        // If length between lists differ by more than one
        if (Math.abs(this.min.length - this.max.length) > 1) {
            if (this.min.length > this.max.length) {
                this.max.push(this.min.shift())
                
                // Rebalance Max
                this.balanceMaxUp()
                
                // Rebalance Min
                this.min.unshift(this.min.pop())
                
                // If greater than child, swap.
                let j = 0
                for (let i = 2 * j + 1; j < this.min.length - 1; i = 2 * j + 1) {
                    if (i >= this.min.length) {
                        break;
                    }
                    
                    if (i + 1 >= this.min.length) {
                        if (this.min[j].val > this.min[i].val) {
                            let tmp = this.min[i]
                            this.min[i] = this.min[j]
                            this.min[j] = tmp
                            j = i
                        } else {
                            break;
                        }
                    } else if (this.min[i].val < this.min[i+1].val) {
                        if (this.min[j].val > this.min[i].val) {
                            let tmp = this.min[i]
                            this.min[i] = this.min[j]
                            this.min[j] = tmp
                            j = i
                        } else {
                            break;
                        }
                    } else {
                        if (this.min[j].val > this.min[i + 1].val) {
                            let tmp = this.min[i+1]
                            this.min[i+1] = this.min[j]
                            this.min[j] = tmp
                            j = i + 1
                        } else {
                            break;
                        }
                    }
                }
            } else {
                this.min.push(this.max.shift())
                this.balanceMinUp()
                
                // Rebalance Max
                this.max.unshift(this.max.pop())
                
                // If greater than child, swap.
                let j = 0
                for (let i = 2 * j + 1; j < this.max.length - 1; i = 2 * j + 1) {
                    if (i >= this.max.length) { 
                        break;
                    }
                    
                    if (i + 1 >= this.max.length) {
                        if (this.max[j].val < this.max[i].val) {
                            let tmp = this.max[i]
                            this.max[i] = this.max[j]
                            this.max[j] = tmp
                            j = i
                        } else {
                            break;
                        }
                    } else if(this.max[i].val > this.max[i+1].val) {
                        if (this.max[j].val < this.max[i].val) {
                            let tmp = this.max[i]
                            this.max[i] = this.max[j]
                            this.max[j] = tmp
                            j = i
                        }  else {
                            break;
                        }
                    } else {
                        if (this.max[j].val < this.max[i+1].val) {
                            let tmp = this.max[i+1]
                            this.max[i+1] = this.max[j]
                            this.max[j] = tmp
                            j = i + 1
                        }  else {
                            break;
                        }
                    }
                }
            }
        }
    }
}

class Node {
    val
    
    constructor(val) {
        this.val = val
    }
}

function runningMedian(a) {
    let res = []
    let heap = new MinMaxHeap(a[0])
    res.push(a[0])
    for (let i = 1; i < a.length; i++) {
        // Add to sorted root
        heap.add(a[i])
        
        // Add median
        res.push(heap.getMedian())
    }
    
    return res
}
