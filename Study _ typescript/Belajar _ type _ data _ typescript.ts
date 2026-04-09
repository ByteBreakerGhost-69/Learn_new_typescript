<!a. type data primitif
// kamu menggunakkan intonasi tipe dengan tanda titik dua(;), yang sering di gunakan adalah:
//string : untuk teks
let nama: string = "Budi";

//numbur : untuk semua angka
let umur: number = 19;
let pi: number = 3.14;

// boolean: hanya bermilai true dan false.
let isStudent: boolean = true;


<!b. type inference ( penebak otomatis)
// salah satu kehebatan typescript adalah dia cukup pintar, kamu tidak selalu menulis type data secara manual.

//jika menulis:
let pesan = "Halo Dunia";
//TS tau bahwa pesan itu bernilai string, tapi jika kamu mencoba mengisi angka setelahnya maka akan eror.


<!c. bahaya keyword any
//any berfungsi mematikan fungsi pengecekan TS.

//apa itu any? jika kamu menandai variable dengan any, kamu data mengisi variable itu dengan apa aja.

//mengapa bahaya? karena ini membuat tujuan kita memakai typescript sia-sia.

//contoh:
let data: any;
data = "Satu"; // Boleh
data = 1;      // Boleh juga
