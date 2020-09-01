let pets = [
    {
        nome: 'Yoshi',
        tipo: 'cachorro',
        raca: 'RND',
        idade: 6,
        genero: 'Masculino',
        vacinado: true
    },

    {
        nome: 'Pituco',
        tipo: 'passaro',
        raca: 'calopsita',
        idade: 2,
        genero: 'Masculino',
        vacinado: false
    },
];

//function listarPets()
{
    for (let i = 0; i < pets.length; i++) 
    {
        //console.log("Nome: "+pets[i].nome);
        //console.log("Tipo: "+pets[i].tipo);
        //console.log("Raça: "+pets[i].raca);
        //console.log("Idade: "+pets[i].idade);
        //console.log("Gênero: "+pets[i].genero);
        //console.log("Vacinado: "+pets[i].vacinado);
    };
};

function vacinadoPets()
{
    for (let i = 0; i < pets.length; i++) 
    {
        if(pets[i].vacinado == true)
        {
            console.log("Animais Vacinados:")
            console.log(pets[i].nome)
        };

        if(pets[i].vacinado == false) 
        {  
            console.log("Animais que precisam de ser Vacinados:")
            console.log(pets[i].nome)
        };  
    }
};
vacinadoPets();