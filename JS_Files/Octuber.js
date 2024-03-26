
// console.log("");
// for (let year = 2024; year <= 2080; year++) {
//     // let d = new Date(year, 0, 1);  this is a date for January 1st.
//     d = new Date(year, 9, 27);

//     if (d.getDay() === 1) {
//         console.log("27th Octuber is being Monday " + year);

//     }
// }


// -----------------------------------------------------------------------------------------------------------------------------------


// below  inside loop, dates is a variable in which the pre-built object named as Date() method is called which have 3 parameters in which (year) will be keep on incrementing by 1 as it is inside the loop.
for (let year = 2024; year <= 2080; year++) {
    // And  9 is the placed because the index of the months starts from the 0 and according to index Octuber lies in 9 index and 27 is the given date by the user of the required month.
    let dates = new Date(year, 9, 27);
    // below during the loop when dates given will be strickly equal to the 1 which means a Monday acc to the (0-6) index of the week.
    if (dates.getDay() === 1) {
        console.log("There is Octuber 27th being Monday in: " + year);
    }

}
