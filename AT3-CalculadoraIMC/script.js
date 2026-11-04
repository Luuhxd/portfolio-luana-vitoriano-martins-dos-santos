function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.className = 'baixo-peso';
        resultadoDiv.innerHTML = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }
    
    const imc = peso / (altura * altura);
    let classificacao = '';
    let classeCss = '';
    
    if (imc < 18.5) {
        classificacao = 'Baixo peso';
        classeCss = 'baixo-peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
        classeCss = 'peso-normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
        classeCss = 'sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau I';
        classeCss = 'obesidade';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau II';
        classeCss = 'obesidade';
    } else {
        classificacao = 'Obesidade grau III (mórbida)';
        classeCss = 'obesidade';
    }
    
    resultadoDiv.style.display = 'block';
    resultadoDiv.className = classeCss;
    resultadoDiv.innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)} kg/m²</strong><br><span>${classificacao}</span>`;
}