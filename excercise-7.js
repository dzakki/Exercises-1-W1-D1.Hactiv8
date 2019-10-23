console.log('-------rows 1--------')
var rows1 = 5;
for (var i = 1; i <= rows1; i++) {
    console.log('*')
}

console.log('-------rows 2--------')
var rows2 = 5;
var results2 = ''
for (var i = 1; i <= rows2; i++) {
    for(var j = 1; j <= rows2; j++){
        results2 += '*'    
    }
    results2 += '\n'
}
console.log(results2)

console.log('-------rows 3--------')
var rows3 = 5;
var results3 = ''
for (var i = 1; i <= rows3; i++) {
    for (var j = 1; j <= i; j++) {
        results3 += '*'
    }
    results3 += '\n'
}
console.log(results3)