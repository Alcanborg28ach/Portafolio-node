const TIPO_CAMBIO = 17.00; 

document.getElementById('btnConvertir').addEventListener('click', () => {

    const pesosInput = document.getElementById('pesos').value;
    const cantidadPesos = parseFloat(pesosInput);

    if (!pesosInput || isNaN(cantidadPesos) || cantidadPesos <= 0) {
        alert('Por favor, ingresa una cantidad válida en pesos');
        return;
    }

    const resultadoDolares = cantidadPesos / TIPO_CAMBIO;

    document.getElementById('dolares').value = resultadoDolares.toFixed(2);
    document.getElementById('tipoCambio').value = `1 USD = ${TIPO_CAMBIO} MXN`;

    console.log(`Conversión realizada: ${cantidadPesos} MXN a ${resultadoDolares.toFixed(2)} USD`);
});

document.getElementById('btnLimpiar').addEventListener('click', () => {

    document.getElementById('pesos').value = '';
    document.getElementById('dolares').value = '';
    document.getElementById('tipoCambio').value = '';
});