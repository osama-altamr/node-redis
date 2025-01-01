const {clearCache} = require('../server/database/mongoose');

module.exports = async (req, res, next) => {
    await next();
    const { user_id } = req.query; 
    clearCache({ key: user_id })

}