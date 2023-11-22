const AcaoBody = `
    <div class="div-square">
        <h1>O que são Ações?</h1>
        <p>
            Ações são partes da propriedade de uma empresa que podem ser
            compradas e vendidas no mercado financeiro. Os investidores que possuem ações
            se tornam acionistas e têm a oportunidade de lucrar com o desempenho da
            empresa por meio do aumento do valor das ações e do recebimento de dividendos.
            As ações também podem ser voláteis e estão sujeitas a riscos de mercado.
        </p>
        <ul>
            <li>Petrobras (PETR4) - R$ 32,62</li>
            <li>Vale (VALE3) - R$ 65,87</li>
            <li>Itaú Unibanco (ITUB4) - R$ 27,21</li>
            <li>Bradesco (BBDC4) - R$ 14,38</li>
            <li>Ambev (ABEV3) - R$ 13,21</li>
        </ul>
    </div>`;

const FIIBody = `
    <div class="div-square">
        <h1>O que são Fundos Imobiliários?</h1>
        <p>
          Fundos de Investimento Imobiliário (FIIs) são veículos de investimento em
          ativos imobiliários, como imóveis comerciais. A diferença principal em relação às
          ações é que FIIs não representam propriedade direta em empresas, mas sim em
          imóveis, gerando renda de aluguéis e valorização das cotas. FIIs tendem a ser
          menos voláteis do que ações e oferecem diversificação em imóveis.
        </p>  
        <ul>
          <li>ARX DOVER RECEBÍVEIS FDO DE INV IMOB - Rentabilidade: 102.00%</li>
          <li>CANUMA CAPITAL MULTIESTRATÉGIA FDO DE INV IMOB - Rentabilidade: 107.71%</li>
          <li>INTER TEVA INDICE DE TIJOLO FUNDO DE INVESTIMENTO - Rentabilidade: 78.00%</li>
          <li>AF INVEST CRI FDO. INV. IMOB - RECEBÍVEIS IMOB. - Rentabilidade: 96.05%</li>
          <li>JASC RENDA VAREJO ESSENCIAL FDO DE INV IMOB - FII - Rentabilidade: 99.48%</li>
        </ul>
    </div>`;

var buttonAcao = document.getElementById("button-acao");
var buttonFII = document.getElementById("button-fii");

buttonAcao.addEventListener("click", function() {
    document.getElementById("div-body").innerHTML = AcaoBody;
});

buttonFII.addEventListener("click", function() {
    document.getElementById("div-body").innerHTML = FIIBody;
});