
const APP_ID = '2130c44cf905528fd9b0ca9a0aa36154';
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}`)
        .then( async res => {
        const data =  await res.json();
         console.log('[Search Input]', data);
        });
});