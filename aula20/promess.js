const advinharMelhorCurso = (curso) => {
    return new Promise((resolve, rejects) =>{
        if (curso == "Full Stack") {
            resolve({
                success: true,
                nomeDocurso: curso,
                mensagem: 'O curso '+ curso + ' realmente é o melhor da DH'
            })
            
        } else {
            rejects({
                success: false,
                mensagem: 'Que pena! você não advinhou o melhor curso da DH'

            })
        }
    })
}

const melhoresMateriasDoMelhorCurso = (resposta) =>{
    return new Promise((resolve, rejects) =>{
        if (resposta.success) {
            resolve("As matérias mais legais do curso "+ resposta.nomeDocurso + "são API e React");

            
        } else {
            rejects("Não temos matérias para listar do curso "+ resposta.nomeDocurso);
            
        }
    })
}
/* console.log(advinharMelhorCurso('Full Stack')) */
let men = advinharMelhorCurso('Full Stack')
.then(resposta => {
    /* console.log(resposta) */
    return melhoresMateriasDoMelhorCurso(resposta)
})
.then(respostaDoMelhorCurso => {
    /* console.log(respostaDoMelhorCurso); */
    return respostaDoMelhorCurso

})
.catch(error => {
    console.log(error)
})
men.then(resposta => {
    console.log(men);
})