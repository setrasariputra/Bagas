class publicBoard {
    constructor(){
        this.run();
    }

    run(){
        this.getCurrentYear();
        this.getCurrentMonth();
        this.displayDateCalendar();
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
    
    getCurrentTotalDayInMonth() {

    }

    displayDateCalendar() {
        const totalDateInMonth = 31;
        let dateCircle = "";
        for(let i = 0; i < totalDateInMonth; i++) {
            const date = i + 1;
            dateCircle += "<div class='day-value'>"+date+"</div>";    
        }

        document.getElementById("displayDateCalendar").innerHTML=dateCircle;
    }
}

new publicBoard();