// URL base de la API Frankfurter
const API_URL = "https://api.frankfurter.app/latest?from=USD";

// Divisas que vamos a mostrar
const currencies = ['EUR', 'GBP', 'JPY'];

// Función para obtener las tasas de cambio desde la API
async function getRates() {
    try {
        const response = await fetch(`${API_URL}&to=${currencies.join(',')}`);
        const data = await response.json();
        
        // Mostrar las tasas de cambio
        document.getElementById('rate-eur').textContent = `1 USD = ${data.rates.EUR} EUR`;
        document.getElementById('rate-gbp').textContent = `1 USD = ${data.rates.GBP} GBP`;
        document.getElementById('rate-jpy').textContent = `1 USD = ${data.rates.JPY} JPY`;
    } catch (error) {
        console.error('Error obteniendo las tasas de cambio:', error);
    }
}

// Llamada inicial para obtener las tasas al cargar la página
getRates();

// Función para convertir la moneda según la divisa seleccionada
function convertCurrency(currency) {
    const amount = document.getElementById(`amount-${currency.toLowerCase()}`).value;
    
    if (!amount || isNaN(amount)) {
        alert('Por favor, ingrese un monto válido');
        return;
    }
    
    // Obtener la tasa de cambio actual
    fetch(`${API_URL}&to=${currency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[currency];
            const convertedAmount = (amount * rate).toFixed(2);
            
            // Mostrar el resultado de la conversión
            document.getElementById(`result-${currency.toLowerCase()}`).textContent = 
                `${amount} USD = ${convertedAmount} ${currency}`;
        })
        .catch(error => console.error('Error al convertir:', error));
}
