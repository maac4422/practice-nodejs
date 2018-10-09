var users = require('./controllers/users')

exports.assignRoutes = function (app) {
    app.get('/api/v1/users',users.getUsers)
}