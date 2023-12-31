
document.addEventListener("DOMContentLoaded", function () {

    const inicio = document.getElementById("inicio");
    inicio.addEventListener("click", function () {
        window.location.href = "../../index.html"
    });

    const menuToggle = document.getElementById("menuToggle");
    const navbarNav = document.getElementById("navbarNav");

    menuToggle.addEventListener("click", function () {
        navbarNav.classList.toggle("show");
    });

    const insights = [
        {
            title: "Venda de Crédito de carbono.",
            text: `Um crédito de carbono vale aproximadamente US$ 5 ou R$ 26 no Brasil. O preço mundial do crédito de carbono, no entanto, pode variar de US$ 1,20 a US$ 40 por tonelada de carbono, dependendo do mercado que está sendo negociado.`,
            text1: `Um crédito de carbono é gerado a cada tonelada de carbono que deixa de ser emitida ou é capturada da atmosfera. A partir de regras e metodologias previamente selecionadas e validadas, é analisado se os carros estão realmente reduzindo as emissões.`,
            text2: `Um cliente procura uma empresa responsável pela venda de créditos de carbono.
             A partir da contratação da empresa, é formado um inventário de gases do efeito estufa produzidos pelo cliente.`,
            link: '../../assets/high-angle-small-tree-stack-coins.jpg'
        },
        {
            title: "Venda e Analise de Dados.",
            text: `Um veículo elétrico gera dados a partir do momento em que ele é ligado. A análise de dados pode agregar valor e os dados se tornarem atrativos para serem vendidos para fabricantes de veículos elétricos, empresas de energia ou outras partes interessadas que buscam informações e métricas sobre o mercado de veículos elétricos.`,
            text1: `Com a integração do veículo elétrico ao sistema MEV-Fleet, seria possível realizar a tratativa dos dados em tempo real.`,
            text2:`Além de outras possibilidades também para empresas de marketing que estudam o comportamento do consumidor.`,
            link: '../../assets/pexels-anna-nekrashevich-6802049.jpg'
        },
        {
            title: "Venda de seguro de veículos elétricos.",
            text: `Os veículos elétricos exigem seguros específicos devido às suas características e tecnologias. A MEV-Fleet pode oferecer seguros especializados para veículos elétricos, fornecendo cobertura adequada e gerando receita adicional.`,
            text1: `Por se tratar de um seguro de frota de veículos elétricos, com volume de clientes da base e seguradoras parceiras, a MEV-Fleet poderá oferecer melhores preços de seguros.`,
            text2: `Com o avanço da tecnologia cada vez mais vemos o número de carros elétricos rodando no Brasil.
             Um novo relatório do Rocky Mountain Institute (RMI) prevê que os veículos elétricos estão se popularizando tanto que dominarão o mercado global até o final desta década.
              De acordo com o documento, os modelos serão de 62% a 86% das vendas até 2030.`,
            link: "../../assets/close-up-no-carregamento-do-carro-eletrico.jpg"
        },
    ];


    let currentInsightIndex = 0;

    const insightTitle = document.getElementById("insightTitle");
    const insightText = document.getElementById("insightText");
    const insightText1 = document.getElementById("insightText1");
    const insightText2 = document.getElementById("insightText2");


    const imgInsight = document.getElementById("imgInsight");
    const NextButton = document.getElementById("NextButton");

    function showCurrentInsight() {
        const currentInsight = insights[currentInsightIndex];
        insightTitle.textContent = currentInsight.title;
        insightText.textContent = currentInsight.text;
        insightText1.textContent = currentInsight.text1;
        insightText2.textContent = currentInsight.text2;
        imgInsight.src = currentInsight.link;

        if (insightText2.textContent) {
            
            insightText2.textContent = currentInsight.text2;
            insightText2.style.display = "revert";
        } else {
            insightText2.style.display = "none";
        }
    }

    const reload = document.getElementById("reload")

    reload.addEventListener("click", function () {
        window.location.reload();
    })


    NextButton.addEventListener("click", function () {
        currentInsightIndex = (currentInsightIndex + 1) % insights.length;
        showCurrentInsight();
    });

    showCurrentInsight();

});

