// Seleciona o botão Converter no HTML e guarda o elemento na constante
const convertButton = document.querySelector(".convert-button");

// Cria a função que será executada quando o usuário clicar no botão
function convertValues() {
  // Pega o valor digitado pelo usuário no campo de entrada
  const inputValor = document.querySelector(".input-valor").value;

  // Seleciona o elemento que mostra o valor na moeda original (Real)
  const moedaValor1 = document.querySelector(".moeda-valor");

  // Seleciona o elemento que mostra o valor convertido (Dólar)
  const moedaValor2 = document.querySelector(".moeda-valor-2");

  // Define a cotação fixa do dólar: 1 dólar equivale a R$ 5,44
  const dolarToday = 5.44;

  // Divide o valor em reais pela cotação para descobrir o valor em dólares
  const converter = inputValor / dolarToday;

  // Formata o valor digitado como moeda brasileira (Real)
  moedaValor1.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency", // Informa que o número será formatado como moeda
    currency: "BRL", // Define o Real brasileiro como moeda
  }).format(inputValor); // Transforma o valor em um formato monetário legível

  // Formata o resultado da conversão como moeda americana (Dólar)
  moedaValor2.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency", // Informa que o número será formatado como moeda
    currency: "USD", // Define o Dólar americano como moeda
  }).format(converter); // Exibe o resultado da conversão em dólares
}

// Adiciona um evento ao botão para executar a função quando houver um clique
convertButton.addEventListener("click", convertValues);
