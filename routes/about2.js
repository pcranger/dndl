var path = require('path')

module.exports = function (app) {
    app.get('/about2', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'about2.html'))
    });
}