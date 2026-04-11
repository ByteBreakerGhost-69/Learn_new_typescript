<!sintaks dasar (T)
<! T singkatan dari type

<!contoh
function identitas<T>(arg: T): T {
    return arg;
}

const output1 = identitas<string>("Azhiim"); // T = string
const output2 = identitas<number>(19);       // T = number


<!generics pada array & objec
// sangat berguna untuk mengam il api yang bentuk nya mirip mirip tapi isinua beda.

<!contoh:
function getSearchProducts<T>(products: T[]): T {
    // Logika mencari index tertentu
    const myIndex = 3;
    return products[myIndex];
}


<!extending generics ( batasan )
// bisa membatasi T jadi hanya bisa type tertentu.

<! contoh:
function countLength<T extends {length: number}>(item: T): number {
    return item.length;
}

