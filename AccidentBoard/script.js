class SafetyPerformanceBoard {
    constructor() {
        this.run();
    }

    run() {
        this.liveDateTime();
        this.addAccidentRecord();
    }

    liveDateTime() {
        setInterval(this.updateDateTime, 1000);
    }

    updateDateTime() {
        const now = new Date();
        document.getElementById("currentDate").innerHTML = now.toLocaleDateString();
        document.getElementById("currentTime").innerHTML = now.toLocaleTimeString().replace(/\./g, ":");
    }

    addAccidentRecord() {
        document.getElementById("accidentForm").addEventListener("submit", (e) => {
            e.preventDefault();
        
            // get input value from user form
            const accidentDate = document.getElementById("accidentDate").value;
            const accidentCount = parseInt(document.getElementById("accidentCount").value);
            
            if(accidentDate && accidentCount > 0) {
                console.log("proses simpan data")
            }
        });
    }

    getAccidentToday() {

    }

    getAccidentThisWeek() {
        
    }
}


new SafetyPerformanceBoard();