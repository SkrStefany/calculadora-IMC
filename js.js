function calcular (event) {
    event.preventDefault();

    var peso;
    var altura;
    var imc;
    var resultado;

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);
    resultado = document.getElementById('resultado');

    if (imc < 17 ) {
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está muito abaixo do peso'
    } else if( imc > 17 && imc <= 19) {
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está abaixo do peso'
    } else if ( imc > 19 && imc <=25) {
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Seu peso está normal'
    }else if (imc > 25 && imc < 30) {
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Acima do peso Cuidado'
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}