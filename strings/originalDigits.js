/**
Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

Note:
Input contains only lowercase English letters.
Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
Input length is less than 50,000.

Example 1:

Input: "owoztneoer"
Output: "012"

Example 2:

Input: "fviefuro"
Output: "45"
*/

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    let arrOfS = s.split('')
    let res = []
    
    while (arrOfS.length != 0) {
        let i = arrOfS.indexOf('z')
        let tmp = ['e','r','o']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('0')
            continue
        }

        i = arrOfS.indexOf('w')
        tmp = ['t', 'o']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('2')
            continue
        }

        i = arrOfS.indexOf('u')
        tmp = ['f','o','r']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('4')
            continue
        }

        i = arrOfS.indexOf('x')
        tmp = ['s','i']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('6')
            continue
        }

        i = arrOfS.indexOf('g')
        tmp = ['e','i','h','t']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('8')
            continue
        }

        i = arrOfS.indexOf('o')
        tmp = ['n','e']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('1')
            continue
        }

        i = arrOfS.indexOf('r')
        tmp = ['t','h','e','e']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('3')
            continue
        }

        i = arrOfS.indexOf('f')
        tmp = ['i','v','e']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('5')
            continue
        }

        i = arrOfS.indexOf('s')
        tmp = ['e','v','e','n']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('7')
            continue
        }

        i = arrOfS.indexOf('n')
        tmp = ['i','n','e']
        if (i != -1) {
            arrOfS.splice(i, 1)
            for (let j = 0; tmp.length != 0; j++) {
                let tmp_i = tmp.indexOf(arrOfS[j])
                if (tmp_i != -1) {
                    tmp.splice(tmp_i, 1)
                    arrOfS.splice(j, 1)
                    j -= 1
                }
            }
            res.push('9')
            continue
        }
    }
    
    // Sort res
    res.sort()
    
    return res.join('')
};

    /*
    zero - z
    two - w
    four - u
    six - x
    eight - g
    
    one - o
    three - r
    five - f
    seven - s
    
    nine
    */
