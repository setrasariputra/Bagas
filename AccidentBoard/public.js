class publicBoard {
    constructor(){
        this.run();
    }

    run(){
        this.getCurrentYear();
        this.getCurrentMonth();
    }    

    getCurrentYear() {
        const currentYear = new Date().getFullYear();
        document.getElementById("currentYear").innerHTML=currentYear;
    }

    getCurrentMonth() {
        const currentMonthIndex = new Date().getMonth();
        const monthInIndonesian = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"];
        document.getElementById("currentMonth").innerHTML=monthInIndonesian[currentMonthIndex];
    }    
}

new publicBoard();