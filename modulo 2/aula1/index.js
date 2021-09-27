// Variáveis
// Regra: nunca use o Var

function precoTerreno (frente, profundidade, precoMetroQuadrado){
    area = frente * profundidade;
    precoTotal = precoMetroQuadrado * area;
    
    return precoTotal;
} 

console.log(precoTerreno(5,20,6350));

function pitagoras (cateto1, cateto2) {
    hipotenusa = Math.sqrt(cateto1*cateto1 + cateto2*cateto2)
    return hipotenusa
}

console.log(pitagoras(4,3))

const alcoolOuGasolina = (alcool, gasolina) => {
    x = alcool / gasolina;
    console.log(x)
    if ( x <= 0.7) {
        return 'alcool';
    } else {
        return 'gasolina'
    }
}

console.log(alcoolOuGasolina(4.0, 5.87))


