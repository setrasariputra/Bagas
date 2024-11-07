class SafetyPerformanceBoard {
    constructor() {
        this.run();
    }

    run() {
        this.liveDateTime();
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
        
    }
}


new SafetyPerformanceBoard();