module.exports = {
    devServer: {
        // this vue client will able to make req / then dev run api/states
        proxy: 'http://127.0.0.1:3000'
    }
}