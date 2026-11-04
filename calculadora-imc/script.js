const btnCalcular = document.querySelector('#btnCalcular')

btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nome = document.querySelector('#inputNome').value
    const altura = document.querySelector('#inputAltura').value
    const peso = document.querySelector('#inputPeso').value
    const display = document.querySelector('#displayResultado')

    if (nome && altura && peso) {
        display.textContent = `Olá ${nome}, altura: ${altura}, peso: ${peso}.`
    } else {
        display.textContent = 'Por favor, preencha todos os campos.'
    }
});

