var peso,maior, menor, media, soma
var pesos=[]

do {
    peso = parseFloat(prompt("Digite o peso do gado (ou 0 para terminar):"));
    if (peso > 0) {
        pesos.push(peso);
    }
} while (peso !== 0);

if (pesos.length > 0) {
        
    var menorPeso = Math.min(...pesos);
    var maiorPeso = Math.max(...pesos);
    var somaPesos = pesos.reduce((soma, peso) => soma + peso, 0);
    var mediaPesos = somaPesos / pesos.length;

   
    window.alert("Menor peso do gado: " + menorPeso + " kg");
    window.alert("Maior peso do gado: " + maiorPeso + " kg");
    window.alert("Média dos pesos dos gados: " + mediaPesos.toFixed(2) + " kg");
} else {
    window.alert("Nenhum peso foi informado.");
}
