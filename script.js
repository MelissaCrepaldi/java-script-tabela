
// Função para receber os dados e calcular a compra
function receberDados() {

    // PRIMEIRO PRODUTO
    let produto1 = prompt("Digite o nome do primeiro produto:");
    if (produto1 === null) return;

    let quantidade1 = prompt("Digite a quantidade de " + produto1 + ":");
    if (quantidade1 === null) return;

    let preco1 = prompt("Digite o preço unitário de " + produto1 + ":");
    if (preco1 === null) return;

    // SEGUNDO PRODUTO
    let produto2 = prompt("Digite o nome do segundo produto:");
    if (produto2 === null) return;

    let quantidade2 = prompt("Digite a quantidade de " + produto2 + ":");
    if (quantidade2 === null) return;

    let preco2 = prompt("Digite o preço unitário de " + produto2 + ":");
    if (preco2 === null) return;

    // TERCEIRO PRODUTO
    let produto3 = prompt("Digite o nome do terceiro produto:");
    if (produto3 === null) return;

    let quantidade3 = prompt("Digite a quantidade de " + produto3 + ":");
    if (quantidade3 === null) return;

    let preco3 = prompt("Digite o preço unitário de " + produto3 + ":");
    if (preco3 === null) return;

    // CONVERTENDO PARA NÚMEROS
    quantidade1 = Number(quantidade1);
    quantidade2 = Number(quantidade2);
    quantidade3 = Number(quantidade3);

    // Aceita preços com vírgula ou ponto
    preco1 = Number(preco1.replace(",", "."));
    preco2 = Number(preco2.replace(",", "."));
    preco3 = Number(preco3.replace(",", "."));

    // VALIDANDO OS VALORES
    if (
        !produto1.trim() || !produto2.trim() || !produto3.trim() ||
        !Number.isInteger(quantidade1) ||
        !Number.isInteger(quantidade2) ||
        !Number.isInteger(quantidade3) ||
        quantidade1 < 0 || quantidade2 < 0 || quantidade3 < 0 ||
        !Number.isFinite(preco1) ||
        !Number.isFinite(preco2) ||
        !Number.isFinite(preco3) ||
        preco1 < 0 || preco2 < 0 || preco3 < 0
    ) {
        alert("Dados inválidos! Digite produtos, quantidades inteiras e preços válidos.");
        return;
    }

    // TOTAL DE CADA PRODUTO
    let total1 = quantidade1 * preco1;
    let total2 = quantidade2 * preco2;
    let total3 = quantidade3 * preco3;

    // TOTAL DA COMPRA
    let totalCompra = total1 + total2 + total3;

    // MÉDIA POR PRODUTO
    let media = totalCompra / 3;

    // MÉDIA INTEIRA POR PRODUTO
    let mediaInt = Math.trunc(media);

    // EXIBINDO O PRIMEIRO PRODUTO
    document.getElementById("q1").innerText = quantidade1;
    document.getElementById("produto1").innerText = produto1;
    document.getElementById("preco1").innerText = preco1.toFixed(2);
    document.getElementById("total1").innerText = total1.toFixed(2);

    // EXIBINDO O SEGUNDO PRODUTO
    document.getElementById("q2").innerText = quantidade2;
    document.getElementById("produto2").innerText = produto2;
    document.getElementById("preco2").innerText = preco2.toFixed(2);
    document.getElementById("total2").innerText = total2.toFixed(2);

    // EXIBINDO O TERCEIRO PRODUTO
    document.getElementById("q3").innerText = quantidade3;
    document.getElementById("produto3").innerText = produto3;
    document.getElementById("preco3").innerText = preco3.toFixed(2);
    document.getElementById("total3").innerText = total3.toFixed(2);

    // EXIBINDO OS RESULTADOS FINAIS
    document.getElementById("totalCompra").innerText = totalCompra.toFixed(2);
    document.getElementById("media").innerText = media.toFixed(2);
    document.getElementById("mediaInt").innerText = mediaInt;
}
