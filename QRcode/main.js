const qrInput = document.getElementById('qrInput');
const qrImg = document.getElementById('qrImg');
const qrButton = document.getElementById('qrButton');
console.log(qrInput, qrImg, qrButton);

qrButton.addEventListener('click', () => {
    const inputValue = qrInput.value;
    console.log(inputValue);

    if (!inputValue) {
        alert("Please enter a valid URL")
        return;

    }
    else {
        qrim
    }
});