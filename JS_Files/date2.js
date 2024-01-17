
function displayData() {

    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDay();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    let formatedData = '${year}-${month}-${day}-${hour}-${minute}-${second}'

    document.getElementById("nischal").innerHTML = formatedData;
}
// displayData();


