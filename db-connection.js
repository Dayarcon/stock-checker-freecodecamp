const mongooes = require('mongoose');
const db = mongooes.connect(process.env.DB,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})

module.exports = db;