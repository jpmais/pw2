document.getElementById('cepForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').innerHTML = 'CEP não encontrado.';
            } else {
                let endereco = `
                    <p>CEP: ${data.cep}</p>
                    <p>Logradouro: ${data.logradouro}</p>
                    <p>Cidade: ${data.localidade}</p>
                    <p>UF: ${data.uf}</p>
                `;
                document.getElementById('resultado').innerHTML = endereco;
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar o CEP:', error);
            document.getElementById('resultado').innerHTML = 'Ocorreu um erro ao buscar o CEP.';
        });
});
