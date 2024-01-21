function fToc(fahrenheit) {
    // return (5(f - 32) / 9);
    let fTemp = fahrenheit;
    let celTemp = (5 * (fTemp - 32) / 9);
    console.log("The coversion of Fahrenheit to Celcius is:", celTemp);
}
function cToF(Celcius) {

    let cTemp = Celcius;
    let farTemp = ((9 * cTemp) / 5 + 32);
    console.log("The coversion of  Celcius to Fahrenheit is:", farTemp);
    // console.log(farTemp);
}
cToF(60);
fToc(45);