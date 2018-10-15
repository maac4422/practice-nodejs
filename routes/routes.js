var users = require('./controllers/users')
var {authenticate} = require('./middlewares/auth');

exports.assignRoutes = function (app) {
    app.get('/api/v1/users',users.getUsers)
    app.post('/api/v1/users',users.postUser)
    app.post('/api/v1/users/auth',users.loginUser)
    app.get('/api/v1/users/me',authenticate,users.getCurrentUser)
    app.delete('/api/v1/users/logout',authenticate,users.logoutUser)
}