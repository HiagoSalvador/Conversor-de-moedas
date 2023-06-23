const Button = document.querySelector(".convert-button")
const CurrencySelect = document.querySelector(".currency-select")

function convertValues() {
    const InputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-convert") // valor em real
    const CurrencyValueToConverted = document.querySelector(".currency-value") // valor convertido

    console.log(CurrencySelect.value)

    const DolarToday = 4.80
    const EuroToday = 5.26
    const BitcoinToday = 127.968
    const LibraToday = 6.11

    if (CurrencySelect.value == "Dolar") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(InputCurrencyValue / DolarToday)
    }

    if (CurrencySelect.value == "Euro") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(InputCurrencyValue / EuroToday)
    }

    if (CurrencySelect.value == "Bitcoin") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(InputCurrencyValue / BitcoinToday)
    }

    if(CurrencySelect.value == "Libra") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency" ,
            currency: "GBP"
           }) .format(InputCurrencyValue / LibraToday )
    }

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(InputCurrencyValue)
}

function changeCurrency() {
    const CurrencyName = document.getElementById("currency-name")
    const Currencyimage = document.querySelector(".currency-img")

    if (CurrencySelect.value == "Dolar") {
        CurrencyName.innerHTML = "Dolar americano"
        Currencyimage.src = "./assets/usa.png"
    }

    if (CurrencySelect.value == "Euro") {
        CurrencyName.innerHTML = "Euro"
        Currencyimage.src = "./assets/euro.png"
    }

    if(CurrencySelect.value == "Libra") {
    CurrencyName.innerHTML = "Libra"
    Currencyimage.src = "./assets/libra.png"
}

    if (CurrencySelect.value == "Bitcoin") {
        CurrencyName.innerHTML = "Bitcoin"
        Currencyimage.src = "./assets/bitcoin.png"
    }

    
}

CurrencySelect.addEventListener("change", changeCurrency)
Button.addEventListener("click", convertValues)