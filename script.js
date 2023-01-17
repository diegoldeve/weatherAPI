const search = document.querySelector('#search');
const alerta = document.querySelector('.error');
const resultado = document.querySelector('.resultado');
const spinner = document.querySelector('.spinner');

alerta.style.display = 'none';
spinner.style.display = 'none';
search.addEventListener('click', validation);

function validation(e){
    e.preventDefault();
    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;
    if(!city||!country){
        mostrarError();
        return;
    }
    searchCity(city,country);

}

async function searchCity(city, country){
    try{
        const id = '51b8eb88e945e2a6ffe283fbcadbec28';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${id}`;
        let data = await fetch(url);
        let res = await data.json();
        console.log(res);
        mostrarHTML(res, city,country)
        if(res.cod>400){
            mostrarError();
        }
    }catch (error){
        // console.log(error);
        
    }
    // fetch(url)
    // .then(data=>data.json)
    // .then(res=>console.log(res))
}

function mostrarError(){
    alerta.style.display = 'flex';
    setTimeout(()=>{
        alerta.style.display = 'none';
    },1000)
}

function mostrarHTML({main}, city, country){
    resultado.textContent = '';
    spinner.style.display = 'block';
    setTimeout(()=>{
        spinner.style.display = 'none';
        const {temp} = main;
        const tempUpdate = temp-273.12;
        const tempActual = tempUpdate.toFixed(2)
        resultado.innerHTML = `
            <h2 class='city'>${city} - ${country}</h2>
            <p class='temp'>Temperatura actual: <b>${tempActual}</b>°C</p>
            
        `
    },1000)
}