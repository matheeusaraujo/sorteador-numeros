function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    if (min > max) {
        alert("O valor mínimo deve ser menor ou igual ao valor máximo!");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Seleciona o elemento onde o resultado será exibido
    const resultElement = document.querySelector(".result-display");

    // Atualiza o conteúdo do elemento com o número gerado
    resultElement.textContent = `O número sorteado é: ${result}`;
}
