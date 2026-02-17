const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const tipoCambio = 17.00; // Puedes cambiarlo

app.post('/convertir', (req, res) => {

    const { pesos } = req.body;
    const cantidadPesos = parseFloat(pesos);

    if (isNaN(cantidadPesos)) {
        return res.status(400).json({ error: "Cantidad inválida" });
    }

    const dolares = cantidadPesos / tipoCambio;

    res.json({
        pesos: cantidadPesos,
        dolares,
        tipoCambio
    });

});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
