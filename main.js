$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit' , function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" /> `).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target"_blank" title="Ver imagem em tamnho real">
                Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem-nova').val('');
    })
})


$(document).ready(function () {
    const tarefasLista = $('ul');

    // Evento submit do formulário
    $('#adicionar-tarefa').submit(function (e) {
        e.preventDefault();
        addLinhas();
    });

    // Função para adicionar linhas
    function addLinhas() {
        const tarefa = $('#nome-tarefa').val();
        const linha = $(`<li><span>${tarefa}</span></li>`).appendTo(tarefasLista);
        
        // Limpa o campo de entrada
        $('#nome-tarefa').val('');
    }

    // Usar delegação de eventos para o clique nos elementos <li>
    tarefasLista.on('click', 'li', function () {
        $(this).toggleClass('feito'); // Adiciona ou remove a classe 'feito'
    });
});