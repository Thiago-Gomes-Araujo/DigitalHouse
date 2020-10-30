const axios = require('axios');
const buscarUsuarioGitHub = async () =>{
    let githubUsers = await axios.get('https://api.github.com/users/Thiago-Gomes')
    /* return githubUsers; */
    console.log(githubUsers)
}
/* console.log(buscarUsuarioGitHub()) */
buscarUsuarioGitHub()