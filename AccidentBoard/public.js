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
        const currentMonthIndex = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const totalDays = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
        
        return totalDays;
    }

    displayDateCalendar() {
        const totalDays = this.getCurrentTotalDayInMonth();
        const totalDateInMonth = totalDays;
        const currentDate = new Date().getDate();
        
        let dateCircle = "";
        for(let i = 0; i < totalDateInMonth; i++) {
            const date = i + 1;
            // check condition
            if(date <= currentDate) { // first condition
                dateCircle += "<div class='day-value bg-green'>"+date+"</div>";
            }else{
                dateCircle += "<div class='day-value'>"+date+"</div>";
            }
        }

        document.getElementById("displayDateCalendar").innerHTML=dateCircle;
    }
}

new publicBoard();