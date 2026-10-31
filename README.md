<p align="center">
  <img src="./assets/img/Logotipo Money Verde com Seta de Crescimento.png" alt="Convert Money" width="200" />
</p>

<h1 align="center">💰 Convert Money</h1>

<p align="center">
  Conversor de moedas que transforma valores em <b>Real Brasileiro (R$)</b> para <b>Dólar</b>, <b>Euro</b>, <b>Libra</b> e <b>Bitcoin</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

---

## 📌 Sobre o projeto

O **Convert Money** é um projeto de estudo feito com HTML, CSS e JavaScript puro. Você digita um valor em reais, escolhe a moeda de destino e o resultado aparece formatado no padrão de cada moeda.

Quando a moeda de destino muda, o nome e a bandeira/ícone são atualizados na hora e o valor é convertido de novo automaticamente.

## 🪙 Moedas disponíveis

| Moeda | Código | Cotação usada (R$) |
| --- | --- | --- |
| 🇺🇸 Dólar Americano | USD | 5,42 |
| 🇪🇺 Euro | EUR | 6,05 |
| 🇬🇧 Libra Esterlina | GBP | 7,26 |
| ₿ Bitcoin | BTC | 415.570,24 |

> ⚠️ As cotações são **fixas** no código e servem apenas para fins de estudo. Não refletem o valor real do mercado.

## ✨ Funcionalidades

- Conversão de Real para Dólar, Euro, Libra e Bitcoin
- Valores formatados com `Intl.NumberFormat` (R$, US$, €, £)
- Bitcoin exibido com até 8 casas decimais
- Troca automática do nome e da imagem da moeda selecionada
- Reconversão automática ao trocar de moeda

## 🧠 Conceitos praticados

- Variáveis e constantes
- Funções
- Condicionais (`if`)
- Manipulação do DOM
- Eventos com `addEventListener`
- Formatação de valores com `Intl.NumberFormat`
- Conversão de valores numéricos

## 📁 Estrutura

```
convert-money/
├── assets/
│   └── img/        # logo, bandeiras e ícones das moedas
├── index.html      # estrutura da página
├── style.css       # estilos
└── app.js          # lógica de conversão
```

## 🚀 Como rodar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Abra o arquivo `index.html` no navegador.

Não precisa instalar nada.

## 🔮 Melhorias futuras

- Buscar cotações em tempo real por uma API
- Permitir escolher a moeda de origem
- Deixar o layout responsivo para celular

## 👨‍💻 Autor

Feito por **Renan Queiroz**.
