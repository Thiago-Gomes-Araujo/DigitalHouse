// criando função para listar todos os objetos que temos dentro do array de pets, ou seja,
// o propósito dessa função é listar todos animais contidos dentro da lista de pets
const listarPets = (pets) => {
    pets.forEach((pet) => {
      console.log("Nome: " + pet.nome);
      console.log("Tipo: " + pet.tipo);
    });
  };


  const validaDados = (novoPet) => {
    return (
      // novoPet.id &&
      novoPet.nome && 
      novoPet.tipo &&
      novoPet.raca &&
      novoPet.idade &&
      novoPet.genero &&
      // validando se o tipo da propriedade vacinado e booleano ou nao atraves do typeof 
      typeof novoPet.vacinado == "boolean"
    )
  };
  
const cadastrarPet = (pets,objetoPet) => {
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
  
        let novoObjeto = {
          id: pets.length + 1,
          ...objetoPet
        }
  
        pets.push(novoObjeto)
        console.log(pets)
      } else {
        console.log("O objeto não tem todas propriedades necessárias informadas")
      }
    } else { 
      console.log("Insira um objeto válido")
    };
  };

  module.exports = {
      listarPets,
      cadastrarPet,
      validaDados
      
};

