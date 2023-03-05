//descartie todas com 0
let faturamento = [22174.1664, 24537.6698, 26139.6134,  26742.6612,  42889.2258, 46251.174, 11191.4722,  3847.4823
    ,373.7838,2659.7563,48924.2448,18419.2614,35240.1826,43829.1667,18235.6852,4355.0662,
    13327.1025,25681.8318,1718.1221,13220.495,8414.61];

// cálculo do menor e do maior faturamento
let menor = faturamento[0];
let maior = faturamento[0];
for (let i = 1; i < faturamento.length; i++) {
  if (faturamento[i] < menor) {
    menor = faturamento[i];
  }
  if (faturamento[i] > maior) {
    maior = faturamento[i];
  }
}


let media = faturamento.reduce((acc, cur) => acc + cur) / faturamento.length;


let dias_acima_da_media = 0;
for (let i = 0; i < faturamento.length; i++) {
  if (faturamento[i] > media) {
    dias_acima_da_media++;
  }
}


console.log("Menor faturamento: " + menor);
console.log("Maior faturamento: " + maior);
console.log("Número de dias com faturamento superior à média mensal: " + dias_acima_da_media);
