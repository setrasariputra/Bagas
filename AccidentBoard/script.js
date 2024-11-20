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

    getAccidentRecords() {
        let accidents = JSON.parse(localStorage.getItem("accidents")) || [];

        return accidents;
    }

    addAccidentRecord() {
        document.getElementById("accidentForm").addEventListener("submit", (e) => {
            e.preventDefault();
        
            // get input value from user form
            const accidentDate = document.getElementById("accidentDate").value;
            const accidentCount = parseInt(document.getElementById("accidentCount").value);
            
            // add double validation value is not empty
            if(accidentDate && accidentCount > 0) {
                // next validation futureDate
                const today = new Date().setHours(0, 0, 0, 0);
                const selectedDate = new Date(accidentDate).setHours(0, 0, 0, 0);
                
                if(selectedDate > today) {
                    alert("Tidak dapat menambahkan data kecelakaan untuk tanggal dimasa depan.")
                }else{
                    // get data records existing
                    let accidentRecords = this.getAccidentRecords();
                    accidentRecords.push(
                        {
                            "date": accidentDate,
                            "count": accidentCount 
                        }
                    );
                    // save data to localstorage
                    localStorage.setItem("accidents", JSON.stringify(accidentRecords));
                    // show success info
                    alert("Data kecelakaan berhasil ditambahkan!");
                }
            }
        });
    }

    getAccidentToday() {

    }

    getAccidentThisWeek() {
        
    }
}


new SafetyPerformanceBoard();