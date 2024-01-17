console.log('----------------------------------------');

for (let year = 2024; year <= 2080; year++) {
    // let d = new Date(year, 0, 1);  this is a date for January 1st.
    d = new Date(year, 9, 27);

    if (d.getDay() === 1) {
        console.log("27th Octuber is being Monday " + year);

    }
}

console.log('----------------------------------------');
