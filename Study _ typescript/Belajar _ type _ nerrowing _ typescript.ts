<!a. operator typeof
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // Aman, karena pasti string
    } else {
        console.log(id); // Pasti number
    }
}


<!b. operator in
// untuk mengecek apakah properti ada di dalam object.
interface User { name: string, email: string }
interface Admin { name: string, isAdmin: boolean }

function isAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin; // TS tahu ini Admin
    }
}


<!c. operator instanceof
// di gunakkan untuk melihat apakah sebuah object di buat oleh classes tertentu.
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString()); // Aman, ini objek Date
    }
}


<!d. type predicates ( is )
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

