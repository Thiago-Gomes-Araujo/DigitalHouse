const api = require('../config/api');

module.exports = {
    async getPhotos (){
        let { data } = await api.get('/photos'); // limitando ?_start=0_limit=50

        return data;
    }

}