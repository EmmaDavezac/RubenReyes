let modoOscuro=true;
let experiencia = true;
let educacion = true;
let licencias= true;

function cambiarModo() {
if (modoOscuro){
    document.body.style.setProperty('--main-bgColor', '#F0F2F5');
    document.body.style.setProperty('--navbar-bgColor', '#FFFFFF');
    document.body.style.setProperty('--main-fontColor', '#00000F');
    document.body.style.setProperty('--secondary-fontColor','grey');
    document.body.style.setProperty('--section-bgColor', '#FFFFFF');
    const moon=document.querySelector('#moonIcon');
    moon.style.display='none';
    const sun = document.querySelector('#sunIcon');
    sun.style.display = 'block';

    modoOscuro=false;    

}
else {
    document.body.style.setProperty('--main-bgColor', '#18191A');
    document.body.style.setProperty('--navbar-bgColor', '#242526');
    document.body.style.setProperty('--main-fontColor', 'aliceblue');
    document.body.style.setProperty('--secondary-fontColor', 'grey');
    document.body.style.setProperty('--section-bgColor', '#242526');
    modoOscuro=true;
    const moon = document.querySelector('#moonIcon');
    moon.style.display = 'block';
    const sun = document.querySelector('#sunIcon');
    sun.style.display = 'none';
}
}  

function verExperiencia(){
    if (experiencia) {
        const obj = document.querySelector('#experienciaContenido');
        obj.style.display = 'none';
        experiencia =false;
        const EI = document.querySelector('#EIExperiencia');
        EI.style.display = 'block';
        const CI = document.querySelector('#CIExperiencia');
        CI.style.display = 'none';
}
    else {
        const obj = document.querySelector('#experienciaContenido');
        obj.style.display = 'block';
        experiencia = true;
        const EI = document.querySelector('#EIExperiencia');
        EI.style.display = 'none';
        const CI = document.querySelector('#CIExperiencia');
        CI.style.display = 'block';
}
}
function verEducacion() {
    if (educacion) {
        const obj = document.querySelector('#educaciónContenido');
        obj.style.display = 'none';
        educacion= false;
        const EI = document.querySelector('#EIEducacion');
        EI.style.display = 'block';
        const CI = document.querySelector('#CIEducacion');
        CI.style.display = 'none';
    }
    else {
        const obj = document.querySelector('#educaciónContenido');
        obj.style.display = 'block';
        educacion = true;
        const EI = document.querySelector('#EIEducacion');
        EI.style.display = 'none';
        const CI = document.querySelector('#CIEducacion');
        CI.style.display = 'block';
    }
}
function verLicencias() {
    if (licencias) {
        const obj = document.querySelector('#licenciasYCertificacionesContenido');
        obj.style.display = 'none';
        licencias = false;
        const EI = document.querySelector('#EILicencias');
        EI.style.display = 'block';
        const CI = document.querySelector('#CILicencias');
        CI.style.display = 'none';
    }
    else {
        const obj = document.querySelector('#licenciasYCertificacionesContenido');
        obj.style.display = 'block';
        licencias = true;
        const EI = document.querySelector('#EILicencias');
        EI.style.display = 'none';
        const CI = document.querySelector('#CILicencias');
        CI.style.display = 'block';
    }
}

