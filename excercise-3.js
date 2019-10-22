    // nama = Dzakki, Rendy, Bagus
    // peran = Ksatria, Tabib, Penyihir
    var nama = 'Dzakki'
    var peran = 'Ksatria'
    Proxytia(nama, peran)
    function Proxytia(nama, peran) {
        if (nama.trim() != '') {
            if (peran.trim() != '') {
                if (nama == 'Dzakki') {
                    if (peran == 'Ksatria') {
                        console.log(`"Selamat datang di Dunia Proxytia, ${nama} " \n "Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu! "`)
                        console.log('selesai')
                    } else {
                        console.log('"Peran salah, silahkan coba lagi!"')
                    }
                }else if (nama == 'Bagus') {
                    if (peran == 'Tabib') {
                        console.log(`"Selamat datang di Dunia Proxytia, ${nama}" \n "Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka." `)
                    } else {
                        console.log('"Peran salah, silahkan coba lagi!"')
                    }
                }else if (nama == 'Rendy') {
                    if (peran == 'Penyihir') {
                        console.log(`"Selamat datang di Dunia Proxytia, ${nama}" \n Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
                    } else {
                        console.log('"Peran salah, silahkan coba lagi!"')
                    }
                }else{
                    console.log('"nama tidak ditemukan, silahkan coba lagi!"')
                }   
            } else {
                console.log(`Hallo ${nama} Pilih peranmu untuk memulai game!`)
            }
        }else{
            console.log(' "Nama harus diisi" ');
        }
    }