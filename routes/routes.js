var users = require('./controllers/users')

exports.assignRoutes = function (app) {
    app.get('/api/v1/users',users.getUsers)
    app.post('/api/v1/users',users.postUser)
    app.post('/api/v1/users/auth',users.loginUser)
}