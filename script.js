const formulario = document.querySelector('.form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Prontinho! Seus dados foram enviados com sucesso.');
    formulario.reset();
});