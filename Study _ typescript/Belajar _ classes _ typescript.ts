<!a. access modifiers ( penentu akses )

<! fitur penting:
<!a.public: bisa di akses dari mana aja.
<!b.private: hanya bisa di akses di dalam kelas itu sendiri.
<!c.protected: bisa di akses di dalam kelas itu dan oleh kelas turunannya.

<! contoh:
class User {
    public email: string
    private name: string
    readonly city: string = "Jakarta"

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const azhiim = new User("a@z.com", "Azhiim");
// azhiim.name // ERROR! Karena private.


<!b.synteks ringkas
class User {
    constructor(
        public email: string, 
        public name: string,
        private userId: string
    ) {} // TS otomatis membuat properti dan mengisinya
}


<!c.getters & setters
<!digunakkan untuk mengonteol bagaimana data di ambil atau di ubah.
class Person {
    private _courseCount = 1

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

