<!a. synteks sederhana: menggunakkan nama type diikuti kurung siku [].

const heroes: string[] = [];
heroes.push("Spider-man"); // Aman
// heroes.push(2); // Error! Karena array ini khusus string.


<!b. synteks generic: menggunakkan array<type>

const powerLevels: Array<number> = [];
powerLevels.push(9001);
  
