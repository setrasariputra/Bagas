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
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentDate = today.getDate();
        const currentMonthIndex = today.getMonth();
        const monthString = this.setDateOnString(currentMonthIndex + 1);
        
        let dateCircle = "";
        for(let i = 0; i < totalDateInMonth; i++) {
            const date = i + 1;
            const dateString = this.setDateOnString(date);
            const fullDate = currentYear+"-"+monthString+"-"+dateString;

            // check condition
            if(date <= currentDate) { // first condition
                // check fullDate with accidents date
                const isAccident = this.checkAccidentDate(fullDate);
                if(isAccident === true) {
                    dateCircle += "<div class='day-value bg-red'>"+date+"</div>";
                }else{
                    dateCircle += "<div class='day-value bg-green'>"+date+"</div>";    
                }
            }else{
                dateCircle += "<div class='day-value'>"+date+"</div>";
            }
        }

        document.getElementById("displayDateCalendar").innerHTML=dateCircle;
    }

    setDateOnString(number) {
        return number.toString().padStart(2, "0");
    }

    checkAccidentDate(date) {
        let output = false;

        // get accidents on localStorage
        const accidents = JSON.parse(localStorage.getItem("accidents")) || [];
        const totalAccidents = accidents.length;
        if(totalAccidents > 0) {
            // check accidentDate
            for(let i = 0; i < totalAccidents; i++) {
                if(date == accidents[i]['date']) {
                    output = true;
                }
            }
        }

        return output;
    }
}

new publicBoard();