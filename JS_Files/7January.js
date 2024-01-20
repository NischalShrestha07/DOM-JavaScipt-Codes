
for (year = 2014; year <= 2050; year++) {
    let dates = new Date(year, 0, 1)

    if (dates.getDay(year) == 0) {
        console.log("The 1st of January is being in:" + year);
    }
}
