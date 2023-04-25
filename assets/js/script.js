let name = 'Fulano';

function updateHour() {
    let horaDoDia = document.querySelector('.middle h1');
    let date =  new Date();
    let hora = date.getHours();
    let minuto = date.getMinutes();
    
    hora = hora < 10 ? '0' + hora : hora;
    minuto = minuto < 10 ? '0' + minuto : minuto;
    horaDoDia.innerHTML = `${hora}:${minuto}`;
}


function momentoDoDia() {
    let horaDoDia = document.querySelector('.middle h3');
    let date =  new Date();
    let hora = date.getHours();

    if (hora > 05 && hora < 12) {
        horaDoDia.innerHTML = `Bom dia, ${name}`;
    } else if (hora >= 12 && hora <= 18) {
        horaDoDia.innerHTML = `Boa tarde, ${name}`;
    } else {
        horaDoDia.innerHTML = `Boa noite, ${name}`;
    }
}


function updateAll() {
    updateHour();
    momentoDoDia();
}


updateAll();
setInterval(updateAll, 1000);





document.querySelector('body').addEventListener('onload', containerTop())

function containerTop() {
    document.querySelector('.addNameContainer').style.top = '16vw';
}




function addName() {
    let inputValue = document.querySelector('.addNameContainer .addName .inserirNome input').value;
    let addNameContainer = document.querySelector('.addNameContainer');

    name = inputValue;
    
    addNameContainer.style.display = 'none';
}
