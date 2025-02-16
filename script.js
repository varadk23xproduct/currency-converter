document.getElementById("convert").addEventListener("click", function() {  
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    let result = document.getElementById("result");

    if (amount === "" || isNaN(amount)) {
        result.innerHTML = "Please enter a valid amount.";
        return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
        let rate = data.rates[toCurrency];
        let total = (rate * amount).toFixed(2);
        result.innerHTML = `${amount} ${fromCurrency} = ${total} ${toCurrency}`;
    })
    .catch(error => {
        console.error("Error fetching exchange rate:", error);
        result.innerHTML = "Error fetching exchange rate. Please try again.";
    });
});
