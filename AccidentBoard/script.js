class SafetyPerformanceBoard{
    constructor(){
        this.run();
    }   
    run(){
        this.liveDateTime();
        this.AddAccidentRecord();
        this.updateAccidentStats();
    }
    liveDateTime(){
        setInterval(this.updateDateTime,1000);
    }
    updateDateTime(){
        const now = new Date();
        document.getElementById("currentDate").innerHTML=now.toLocaleDateString();
        document.getElementById("currentTime").innerHTML=now.toLocaleTimeString().replace(/\./g,":");
    }

    getAccidentRecords(){
        let accidents=JSON.parse(localStorage.getItem("accidents")) || [];
        return accidents;
    }

    AddAccidentRecord(){
        document.getElementById("accidentForm").addEventListener("submit",(e)=>{
            e.preventDefault();

            //get input value form user form
            const accidentDate = document.getElementById("accidentDate").value;
            const accidentCount = parseInt(document.getElementById("accidentCount").value);

            //add double validasi value is not empty
            if(accidentDate && accidentCount>0){
                //next validation futuredate
                const today = new Date().setHours(0,0,0,0);
                const selectedDate = new Date(accidentDate).setHours(0,0,0,0);
                
                if(selectedDate>today){
                    alert("Tidak Dapat Menambahkan data kecelakaan untuk tanggal dimasa depan");
                }else{
                    //get data record existing
                    let getAccidentRecords=this.getAccidentRecords();
                    getAccidentRecords.push({
                        "date":accidentDate,
                        "count":accidentCount
                    }
                    )
                    localStorage.setItem("accidents",JSON.stringify(getAccidentRecords));
                    //update accident stats
                    this.updateAccidentStats();
                    //show success info
                    alert("data kecelakaan berhasil ditambahkan");
                }
            }
        });
    }

    updateAccidentStats(){
        //get this date
        const today=new Date().setHours(0,0,0,0);
        console.log(today);
        //get record from local storage
        const AccidentRecords = this.getAccidentRecords();

        //count today
        let totalToday = 0;

         //count all time
         let totalAccidentAllTime = 0;

         //count this week
         let totalAccidentThisWeek = 0;

         //countThisMonth
         let totalAccidentThisMonth = 0;

         //calculate start of the week (dimulai hari senin)
         const startOfWeek = new Date(today);
         const dayOfWeek = startOfWeek.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
         const daysToMonday = (dayOfWeek === 0) ? 6 : dayOfWeek - 1; // Adjust if week starts on Monday
         startOfWeek.setDate(startOfWeek.getDate() - daysToMonday);

         //calculate start of month
         const startOfMonth = new Date(today);
         startOfMonth.setDate(1); // Example: 1 Nov 2024 (start of the month)

        //loop data record
        AccidentRecords.forEach(accident=>{
            //count all time
            totalAccidentAllTime +=accident.count;

            //count today
            let accidentDate=new Date(accident.date).setHours(0,0,0,0);
            if(today === accidentDate ){
                totalToday+=accident.count;
            }

            if (accidentDate >= startOfWeek && accidentDate <= today) {
                totalAccidentThisWeek += accident.count;
            }

            if (accidentDate >= startOfMonth && accidentDate <= today) {
                totalAccidentThisMonth += accident.count;
            }

        });

        //print to InnerHTML
        document.getElementById("totalAccidentToday").innerHTML=totalToday;
        document.getElementById("totalAccidentAllTime").innerHTML=totalAccidentAllTime;
        document.getElementById("totalAccidentThisWeek").innerHTML=totalAccidentThisWeek;
        document.getElementById("totalAccidentThisMonth").innerHTML=totalAccidentThisMonth;

    }

    getAccidentToday(){

    }

    getAccidentThisWeek(){

    }

}

new SafetyPerformanceBoard();