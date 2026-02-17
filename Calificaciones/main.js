document.getElementById('btnCalcular').addEventListener('click', () => {

    const n1 = parseFloat(document.getElementById('u1').value) || 0;
    const n2 = parseFloat(document.getElementById('u2').value) || 0;
    const n3 = parseFloat(document.getElementById('u3').value) || 0;


    const promedio = (n1 + n2 + n3) / 3;
 
    const inputPromedio = document.getElementById('promedio');
    inputPromedio.value = promedio.toFixed(2);

    const inputEstatus = document.getElementById('estatus');
    if (promedio >= 7) {
        inputEstatus.value = "APROBADO";
        inputEstatus.style.color = "#28a745";
    } else {
        inputEstatus.value = "REPROBADO";
        inputEstatus.style.color = "#8e2336"; 
    }
});

document.getElementById('btnLimpiar').addEventListener('click', () => {
    document.getElementById('nombre').value = '';
    document.getElementById('u1').value = '';
    document.getElementById('u2').value = '';
    document.getElementById('u3').value = '';
    document.getElementById('promedio').value = '';
    document.getElementById('estatus').value = '';
});