const search = document.querySelector('#search');
const alerta = document.querySelector('.error');
alerta.style.display = 'none'
search.addEventListener('click', validation)

function validation(e){
    e.preventDefault();
    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;
    if(!city||!country){
        mostrarError();
        return;
    }
    console.log(`${city} - ${country}`)

}

function searchCity(){

}

function mostrarError(){
    alerta.style.display = 'block';
    setTimeout(()=>{
        alerta.style.display = 'none';
    },1500)
}