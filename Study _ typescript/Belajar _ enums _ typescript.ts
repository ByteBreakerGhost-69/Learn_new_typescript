// di gunakkan untuk mendefinisikan sekumpulan konstan yang memiliki nama.

<! contoh kasus: status pengiriman.

enum StatusPengiriman {
    PENDING,   // Secara otomatis bernilai 0
    PROSES,    // Secara otomatis bernilai 1
    DIKIRIM,   // Secara otomatis bernilai 2
    SELESAI    // Secara otomatis bernilai 3
}

const statusSekarang = StatusPengiriman.DIKIRIM;

if (statusSekarang === StatusPengiriman.DIKIRIM) {
    console.log("Paket sedang di jalan!");
}


<! custom value
//dapat memberikan nilai sendiri, baik angka maupun string.

enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 10,
    WINDOW // Karena sebelumnya 10, maka ini otomatis jadi 11
}


<! tips pro ( const enum)
const enum Arah {
    UTARA,
    SELATAN  
}
  
