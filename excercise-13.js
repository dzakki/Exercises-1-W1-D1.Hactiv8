function xo(str) {
    // you can only write your code here!
    var strX = ''
    var strO = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'x') {
            strX += 'x'
        }else{
            strO += 'o'
        }
    }
    if ( strX.length == strO.length) {
        return true
    }
    return false
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true