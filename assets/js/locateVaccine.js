function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            console.log(element[key])
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function sleep(milliseconds) {
    let timeStart = new Date().getTime();
    while (true) {
        let elapsedTime = new Date().getTime() - timeStart;
        if (elapsedTime > milliseconds) {
            break;
        }
    }
}

function findCenter(resp) {
    var tableData = [];
    let age = document.getElementById("age").value;
    for (var i = 0; i < resp.centers.length; i++) {
        var center = resp.centers[i];
        for (var j = 0; j < resp.centers[i].sessions.length; j++) {
            var session = resp.centers[i].sessions[j];
            if (session.available_capacity > 0 && session.min_age_limit == age) {
                var entry = {
                    Center: center.name, PIN: center.pincode, Doses: session.available_capacity, Date: session.date,
                    Vaccine: session.vaccine
                };
                tableData.push(entry);
            }
        }
    }
    return tableData;
}
var snd = new Audio('/assets/audio/alarm.mp3');

function foundVaccine(tableData) {
    let addTh = true;
    document.getElementById("h3").innerHTML = "Found Vaccine at following centers."
    let table = document.querySelector("table");
    let data = Object.keys(tableData[0]);
    if (addTh) {
        generateTableHead(table, data);
        addTh = false;
    }
    generateTable(table, tableData);
    snd.play();
}

function getDate() {
    var d = new Date();
    if (d.getDate() < 10) {
        var day = "0" + d.getDate();
    }
    else {
        var day = d.getDate();
    }
    if (d.getMonth() < 10) {
        var month = "0" + (d.getMonth() + 1);
    }
    else {
        var month = d.month() + 1;
    }
    date = "&date=" + day + "-" + month + "-" + d.getFullYear();

    return date;
}

var vaccineFound = false;

async function locateVaccine() {
    var url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict"

    date = getDate();
    dist_id = document.getElementById("district").value;
    district = "?district_id=" + dist_id;
    var fullUrl = url + district + date;
    let head3 = document.querySelector("h3");
    document.getElementById("h3").innerHTML = "Finding Vaccine<div class=\"spinner-border\"></div>";

    vaccineFound = false;
    while (!vaccineFound) {
        let response = await fetch(fullUrl);
        if (response.ok) {
            let resp = await response.json();
            var tableData = findCenter(resp);
        }
        if (tableData.length > 0) {
            vaccineFound = true;
            foundVaccine(tableData);
        }
        sleep(5000);
    }
}

function stopLooking() {
    vaccineFound = true;
    document.getElementById("h3").innerHTML = "Stopped";
    snd.stop();
}