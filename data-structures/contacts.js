class Store {
    map = {}
    cnt = 1
    
    plusOne() {
        this.cnt += 1
    }
    
    print() {
        for (let [k,v] of Object.entries(this.map)) {
            console.table(v)
        }
    }
}

function contacts(queries) {
    let store = new Store()
    let res = []
    for (let query of queries) {
        // store.print()
        if (query[0] == 'add') {
            addToStore(query[1], store)
        } else if (query[0] == 'find') {
            res.push(childrenOfPrefix(query[1], store))
        }
    }
    
    return res
}

function addToStore(name, store) {
    let follow = store
    for (let i = 0; i < name.length; i++) {
        if (follow.map[name[i]]) {
            //follow.plusOne()
            follow.map[name[i]].plusOne()
            follow = follow.map[name[i]]
        } else {
            // Add remainder to store
            for (let char of name.substring(i)) {
                follow.map[char] = new Store()
                follow = follow.map[char]
            }
            
            return;
        }
    }
}

// ss
// h j k s
//        s 
function childrenOfPrefix(name, store) {
    let i
    for (i = 0; i < name.length - 1; i++) {
        if (store.map[name[i]]) {
            store = store.map[name[i]]
        } else {
            break
        }
    }

    if (i == name.length - 1 && store.map[name[i]]) {
        return store.map[name[i]].cnt
    } else {
        return 0
    }
}
