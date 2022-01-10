let header = document.getElementById('header-container');
header.style.background = '#3CB371';

let emergency = document.querySelector('.emergency-tasks');
emergency.style.background = '#F08080';

let noEmergency = document.querySelector('.no-emergency-tasks')
noEmergency.style.background = '#F0E68C';

let subtitulos = document.querySelectorAll('.emergency-tasks h3');
    for (let index = 0; index < subtitulos.length; index += 1) {
        subtitulos[index].style.backgroundColor = 'black'
    }

let subtitulosNo = document.querySelectorAll('.no-emergency-tasks h3');
    for (let i=0; i < subtitulosNo.length; i++){
        subtitulosNo[i].style.backgroundColor = 'purple'
    }

let footer = document.querySelector('#footer-container');
    footer.style.backgroundColor = 'green'


