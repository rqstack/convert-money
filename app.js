const convertButton = document.querySelector(".convert-button");
const select2 = document.querySelector(".segundo-md");

function convertValues() {
  const inputValor = Number(document.querySelector(".input-valor").value);

  const moedaValor1 = document.querySelector(".moeda-valor");
  const moedaValor2 = document.querySelector(".moeda-valor-2");

  const dolarToday = 5.42;
  const euroToday = 6.05;
  const libraToday = 7.26;
  const bitcoinToday = 415570.24;

  moedaValor1.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValor);

  if (select2.value == "USD") {
    moedaValor2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValor / dolarToday);
  }

  if (select2.value == "EUR") {
    moedaValor2.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValor / euroToday);
  }

  if (select2.value == "GBP") {
    moedaValor2.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValor / libraToday);
  }

  if (select2.value == "BTC") {
    moedaValor2.innerHTML =
      new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 8,
      }).format(inputValor / bitcoinToday) + " BTC";
  }
}
function trocarImg() {
  const moedaName = document.getElementById("moeda-name");
  const moedaImg = document.querySelector(".moeda-img");
  if (select2.value == "USD") {
    moedaName.innerHTML = "Dólar";
    moedaImg.src = "./assets/img/estados-unidos (1) 1.png";
  }
  if (select2.value == "EUR") {
    moedaName.innerHTML = "Euro";
    moedaImg.src = "./assets/img/euro.png";
  }
  if (select2.value == "GBP") {
    moedaName.innerHTML = "Libra";
    moedaImg.src = "./assets/img/libra 1.png";
  }
  if (select2.value == "BTC") {
    moedaName.innerHTML = "Bitcoin";
    moedaImg.src = "./assets/img/bitcoin 1.png";
  }
  convertValues();
}
select2.addEventListener("change", trocarImg);
convertButton.addEventListener("click", convertValues);

/*
Projeto: Conversor de Moedas

O projeto converte valores em reais para dólar, euro, libra e Bitcoin.
Também atualiza automaticamente o nome e a imagem da moeda selecionada.

Conceitos praticados:
- Variáveis e constantes
- Funções
- Condicionais (if)
- Manipulação do DOM
- Eventos com addEventListener
- Formatação de valores com Intl.NumberFormat
- Conversão de valores numéricos

As cotações utilizadas são fixas e servem apenas para fins de estudo.
*/
