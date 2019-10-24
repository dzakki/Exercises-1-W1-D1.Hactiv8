console.log('LOOPING PERTAMA')
var numLoopingPertama = 1;
while ( numLoopingPertama < 20) {
    numLoopingPertama += 2
    console.log(numLoopingPertama + ' - I love coding')
}
console.log('LOOPING KEDUA')
var numLoopingKedua = 20;
while (numLoopingKedua > 1) {
    console.log(numLoopingKedua + ' - I will become fullstack developer')
    numLoopingKedua -=2
}

console.log('LOOPING PERTAMA')
for (var i = 1; i <= 20; i++) {
    console.log(i + ' I love coding')
}


console.log('LOOPING KEDUA')
for (var i = 20; i >= 1; i--) {
    console.log(i + ' I will become fullstack developer')
}

console.log('------- Ganjil Genap ---------')
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log('GANJIL')
    }else{
        console.log('GENAP')
    }
}

console.log('--------- counter 2 ---------')
for (let i = 1; i <= 100; i += 2) {
    if (i == 1) {
        console.log('')
    } else {
        console.log(i + ' KELIPATAN ' + i)   
    }
}

console.log('--------- counter 6 ---------')
for (let i = 1; i <= 100; i += 6) {
    if (i == 1) {
        console.log('')
    } else {
        console.log(i + ' KELIPATAN ' + i)   
    }
}

console.log('--------- counter 9 ---------')
for (let i = 1; i <= 100; i += 9) {
    if (i == 1) {
        console.log('')
    } else {
        console.log(i + ' KELIPATAN ' + i)   
    }
}
