const axios = require("axios")

const buscarUsuariosGitHub = async () => {
  let githubUsers = await axios.get('https://api.github.com/users/Thiago-Gomes')

  console.log(githubUsers)
}

buscarUsuariosGitHub()