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

// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider__prev-button');
const nextButton = document.querySelector('.slider__next-button');
const slides = Array.from(slider.querySelectorAll('div'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Инициализация слайдера
updateSlider();