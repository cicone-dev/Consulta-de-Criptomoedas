// Função para fazer uma requisição GET para a API usando async/await
async function fetchCryptoData(cryptoName) {
    try {
        const response = await fetch(`https://api.coinlore.com/api/tickers/?&name=${cryptoName}`);
        
        // Verifica se a resposta da API está OK (status 200)
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados da criptomoeda.');
        }

        const cryptoData = await response.json();
        return cryptoData;
    } catch (error) {
        console.error('Erro ao obter dados da criptomoeda:', error);
        return null;
    }
}

// Função para exibir os dados da criptomoeda na página
async function displayCryptoData(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const cryptoNameInput = document.getElementById('crypto-name');
    const cryptoName = cryptoNameInput.value.trim(); // Obtém o nome da criptomoeda digitado

    const cryptoInfoDiv = document.getElementById('crypto-info');
    cryptoInfoDiv.innerHTML = ''; // Limpa o conteúdo anterior

    // Chama a função para obter os dados da criptomoeda
    const cryptoData = await fetchCryptoData(cryptoName);

    // Verifica se os dados foram obtidos com sucesso
    if (cryptoData && cryptoData.data.length > 0) {
        // Encontra a criptomoeda correta com base no nome fornecido
        const crypto = cryptoData.data.find(crypto => crypto.name.toLowerCase() === cryptoName.toLowerCase());

        if (crypto) {
            // Exibe informações sobre a criptomoeda encontrada
            const cryptoNameElement = document.createElement('h4');
            cryptoNameElement.textContent = `${crypto.name} (${crypto.symbol})`;
            cryptoInfoDiv.appendChild(cryptoNameElement);

            const cryptoPriceElement = document.createElement('p');
            cryptoPriceElement.textContent = `Preço: US$ ${crypto.price_usd}`;
            cryptoInfoDiv.appendChild(cryptoPriceElement);

            const cryptoRankElement = document.createElement('p');
            cryptoRankElement.textContent = `Classificação no Mercado: ${crypto.rank}º`;
            cryptoInfoDiv.appendChild(cryptoRankElement);

            const cryptoMarketCapElement = document.createElement('p');
            cryptoMarketCapElement.textContent = `Valor de mercado da moeda em Dólar:  US$ ${crypto.market_cap_usd}`;
            cryptoInfoDiv.appendChild(cryptoMarketCapElement);

            const cryptoChange24Element = document.createElement('p');
            cryptoChange24Element.textContent = `Alteração de preço nas últimas 24h: ${crypto.percent_change_24h}%`;
            cryptoInfoDiv.appendChild(cryptoChange24Element);


            
            const cryptoChange1Element = document.createElement('p');
            cryptoChange1Element.textContent = `Alteração de preço na última 1h: ${crypto.percent_change_1h}%`;
            cryptoInfoDiv.appendChild(cryptoChange1Element);

            const cryptoPricebtcElement = document.createElement('p');
            cryptoPricebtcElement.textContent = `Valor da moeda em BitCoin: ${crypto.price_btc} BTC`;
            cryptoInfoDiv.appendChild(cryptoPricebtcElement);

            const cryptoVolume24Element = document.createElement('p');
            cryptoVolume24Element.textContent = `Volume de negociação nas últimas 24 horas em US$: $${crypto.volume24}`;
            cryptoInfoDiv.appendChild(cryptoVolume24Element);


        } else {
            // Se não encontrar a criptomoeda, exibe uma mensagem de erro
            console.log('Não foi possível encontrar informações sobre essa criptomoeda.');
            cryptoInfoDiv.innerHTML = "<p>Não foi possível encontrar informações sobre essa criptomoeda.</p>";
        }
    } else {
        console.log('Não foi possível obter os dados da criptomoeda.');
        cryptoInfoDiv.innerHTML = "<p>Não foi possível encontrar informações sobre essa criptomoeda.</p>";
    }
}

// Vincula a função de exibir os dados da criptomoeda ao evento de submit do formulário
const cryptoForm = document.getElementById('crypto-form');
cryptoForm.addEventListener('submit', displayCryptoData);


// função para limpar a barra de pesquisa atraves do botão "limpar" no HTML

function clearSearch() {
    const cryptoNameInput = document.getElementById('crypto-name');
    cryptoNameInput.value = '';
}

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener('click', clearSearch);






// TESTE

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show');
        console.log('clicked');
    });
});


