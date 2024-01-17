
let today = new Date();
let date = today.getDate();

let month = today.getMonth() + 1;
// above +1 is placed because index start from the 0

let yyyy = today.getFullYear();


if (date < 10) {
    date = '0' + date;
}
if (month < 10) {
    month = '0' + month;

}



today = date + " : " + month + " : " + yyyy;
console.log(today);


today = date + "/" + month + '/' + yyyy;
console.log(today);