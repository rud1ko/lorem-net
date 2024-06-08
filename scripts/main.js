const rangeNumber = document.getElementById('rangeNum');
const inputRange = document.getElementById('rangeInput');
const inputFile = document.querySelector('.input-file input[type=file]')
const form = document.querySelector('.main__checkout-order-form')

rangeNumber.textContent = inputRange.value + ' %';

inputRange.addEventListener('input', (el) => {
    rangeNumber.textContent = el.target.value + ' %';
});

inputFile.addEventListener('change', function() {
    let file = this.files[0];
    this.nextElementSibling.innerHTML = file.name;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.error(error);
    });
});