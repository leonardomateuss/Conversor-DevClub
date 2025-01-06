const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrency = document.querySelector (".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-valeu-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 6.3

    const convertedValue = inputCurrency/ dolarToday

    currencyValueToConvert.innerHTML= inputCurrency
    currencyValueConverted.innerHTML= convertedValue
    
    console.log(convertedValue)
}


convertButton.addEventListener("click", convertValues)