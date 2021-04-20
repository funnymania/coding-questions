/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor) {
    const MAX_POS = Math.pow(2, 31) - 1
    const MAX_NEG = -1 * Math.pow(2, 31)
    
    let positive = true 
    if (dividend < 0 && divisor > 0) {
        positive = false
    } else if (divisor < 0 && dividend > 0) {
        positive = false
    }
    
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    
    let res = divideHelper(dividend, divisor)
    
    // A trick I discovered. ;p
    let tmp = res
    if (!positive) {
        res -= tmp
        res -= tmp
    }
    
    if (res > MAX_POS || res < MAX_NEG) {
        return MAX_POS
    }
        
    return res
};

let divideHelper = function(dividend, divisor) {
    if (divisor > dividend) {
        return 0
    } 
    
    if (divisor == dividend) {
        return 1
    }
    
    if (divisor == 1) {
        return dividend
    }
    
    let exponent = 1
    let tmp = divisor
    
    // Apparently, bit-shifting is slower in JS than addition. Somebody help. 
    while (tmp + tmp <= dividend) {
        tmp += tmp
        exponent += exponent
    }
    
    return exponent + divideHelper(dividend - tmp, divisor)
}

export { divide }
