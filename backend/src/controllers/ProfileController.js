const connection = require('../database/connection');

module.exports = {
    async index(requet, response){
        const ong_id = requet.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
   }
}