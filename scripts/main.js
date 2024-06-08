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

    let isValid = true;
    this.querySelectorAll('input, select').forEach(function(field) {
        if (field.value.trim() === '') {
            isValid = false;
        }
    });

    if (isValid) {
        fetch(this.action, {
            method: 'POST',
            body: formData
        }).then(function(response) {
            console.log(response);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            form.reset()
        }).catch(function(error) {
            console.error(error);
        });
    } else {
        alert('Пожалуйста, заполните все поля формы!');
    }
});