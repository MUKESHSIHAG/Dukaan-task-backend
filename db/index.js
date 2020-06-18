const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://mukeshsihag:mukesh22@cluster0-wdwqo.mongodb.net/contact?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db