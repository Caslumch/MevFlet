document.addEventListener("DOMContentLoaded", function () {
    // Seu código JavaScript aqui
    // const lerMaisBtn = document.getElementById("lerMaisBtn");
// lerMaisBtn.addEventListener("click", function () {
//     alert('clicou')
// });

// Defina uma lista de insights
const insights = [
    {
        title: "Crédito De Carbono",
        text: `Um crédito de carbono vale aproximadamente US$ 5 ou R$ 26 no Brasil. O preço
                    mundial do crédito
                    de carbono, no entanto, pode variar de US$ 1,20 a US$ 40 por tonelada de carbono, dependendo do
                    mercado que está sendo negociado. Um crédito de carbono é gerado a cada tonelada de carbono que
                    deixa de ser emitida ou é capturada da atmosfera. A partir de regras e metodologias previamente
                    selecionadas e validadas, é analisado se os carros estão realmente reduzindo as emissões. Um cliente
                    procura uma empresa responsável pela venda de créditos de carbono. A partir da contratação da
                    empresa, é formado um inventário de gases do efeito estufa produzidos pelo cliente`,
        link: './assets/high-angle-small-tree-stack-coins.jpg'
    },
    {
        title: "Venda e Analise de Dados",
        text: `A venda de dados trata-se da comercialização de dados sensíveis de um determinado usuário para diversos fins.
                 Essas informações podem ser comercializadas para diferentes segmentos (como call center, por exemplo),
                  em que as empresas conseguem se beneficiar desses dados. Axciom, Epsilon, Datalogix… embora você provavelmente nunca tenha ouvido falar dessas companhias,
                   seu faturamento conjunto está beirando a cifra de US$ 2 bilhões. Os data brokers compram e vendem dados pessoais de todo tipo e em vários ramos de atuação`,
        link: './assets/pexels-anna-nekrashevich-6802049.jpg'
    },
    {
        title: "Venda De Seguro Especializado",
        text: `Com o avanço da tecnologia cada vez mais vemos o número de carros elétricos rodando no Brasil.
                 Um novo relatório do Rocky Mountain Institue (RMI) prevê que os veículos elétricos estão se popularizando tanto que dominarão o mercado global até o final desta década. 
                 De acordo com o documento, os modelos serão de 62% a 86% das vendas até 2030.
                 Estimando um uso de 60 mil quilômetros, o modelo elétrico terá um TCO maior do que o convencional, pois terá depreciação mais rápida e mais gastos com seguro,
                  IPVA e manutenção. O seguro de um carro elétrico chega a ser o dobro da versão a combustão`,
        link: "./assets/close-up-no-carregamento-do-carro-eletrico.jpg"
    },
    // Adicione mais insights aqui
];

// Inicialize um índice para acompanhar o insight atual
let currentInsightIndex = 0;

// Obtenha referências para os elementos HTML relevantes
const insightTitle = document.getElementById("insightTitle");
const insightText = document.getElementById("insightText");
const imgInsight = document.getElementById("imgInsight");
const NextButton = document.getElementById("NextButton");

// Função para exibir o insight atual
function showCurrentInsight() {
    const currentInsight = insights[currentInsightIndex];
    insightTitle.textContent = currentInsight.title;
    insightText.textContent = currentInsight.text;
    imgInsight.src = currentInsight.link;
}

// Event listener para o botão "Próximo Insight"
NextButton.addEventListener("click", function () {
    debugger;
    // Avança para o próximo insight (circula de volta para o primeiro se necessário)
    currentInsightIndex = (currentInsightIndex + 1) % insights.length;
    showCurrentInsight();
});

// Exiba o primeiro insight ao carregar a página
showCurrentInsight();

});

