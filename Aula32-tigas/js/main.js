let form = document.querySelector('#form-contact');

let nome = document.querySelector("input[name = 'nome']");
let email = document.querySelector("input[name = 'email']");
/* let mensagem = document.querySelector("input[name = 'mensagem']"); */
let marketing = document.querySelector("input[name = 'marketing']");
let newsletter = document.querySelector("input[name = 'newsletter']");



form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {
        'nome': nome.value,
        'email': email.value,
        /* 'mensagem': mensagem.value, */
        'marketing': marketing.value,
        'newsletter': newsletter.value
    }
})

