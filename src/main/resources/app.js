let tabledata = document.getElementById('tabledata')

//Gets data from database from API to print values
fetch("Input API Connection here")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(let row of data) {

            //Converts unixtimestamp to time
            var unixTimestamp = row.ts;
            var date = new Date(unixTimestamp*1000);

            //Fills table on htmlpage
            tabledata.innerHTML += `<tr><td>${row.deviceId}</td><td>${date}</td><td>${row.temp}</td><td>${row.hum}</td>`    }
    })