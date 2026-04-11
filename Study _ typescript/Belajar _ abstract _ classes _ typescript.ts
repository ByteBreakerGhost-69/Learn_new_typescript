abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void // Harus diimplementasikan oleh kelas anak
    
    getReelTime(): number {
        // Method biasa (sudah ada isinya) juga boleh ada di sini
        return 8
    }
}

class Instagram extends TakePhoto {
    getSepia(): void {
        console.log("Sepia applied!");
    }
}

const photo = new Instagram("Portrait", "None");

