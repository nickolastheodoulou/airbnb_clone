const userFunc = require('../../functions/user');

module.exports = (app) => {
    /**
     * Endpoint responsible for calling the verifyAccount function
     * and sending back the response from it
     */
    app.post('/api/user/check', (req, res, next) => {
        console.log("/api/user/check is being called");
        const {user} = req.query;
        userFunc.verifyAccount(user).then(function(callback) {
            res.json(callback)
        });
    });
};
