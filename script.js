const button = document.querySelector('.button');
const input = document.querySelector('.input');
const error = document.querySelector('.error');
const image = document.querySelector('.image');
const success = document.querySelector('.success');

button.addEventListener('click', () => {
    if (input.value === 'гг') {
        error.textContent = '';
        image.src = './witcher.svg';
        image.alt = 'Ведьмак';
        success.classList.add('success_visible');
        success.textContent = '256 СТР';
        image.classList.add('image_visible');
    } else {
        error.classList.remove('error_visible');
        image.src = '';
        image.alt = '';
        success.classList.remove('success_visible');
        image.classList.remove('image_visible');
        success.textContent = '';
        error.textContent = '';
        setTimeout(() => {
          error.textContent = 'Неверно'; 
          error.classList.add('error_visible'); 
        }, 500);
        
    }
})