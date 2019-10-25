function konversiMenit(menit) {
    // you can only write your code here!
    var menitTemp = menit % 60
    var jamTemp = (menit - menitTemp) / 60
    
    menitTemp = String(menitTemp)
    if ( menitTemp.length == 1) {
        menitTemp = '0' + menitTemp
    }
    
    var KonversiJam =  jamTemp + ':' + menitTemp
    return KonversiJam;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00