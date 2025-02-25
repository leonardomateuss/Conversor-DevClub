
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 6.3
    const euroToday = 6.5

    

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML =  new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency / dolarToday)
    
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency/euroToday)
    }

    currencyValueToConvert.innerHTML =  new Intl.NumberFormat("pt-BR", {
        style: "currency",
         currency: "BRL",
    }).format(inputCurrency)


    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector("currency-img")
   
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    
    }
    
    convertValues()

   }

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click",convertValues)
