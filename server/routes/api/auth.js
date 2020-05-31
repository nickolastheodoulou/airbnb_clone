const userModel = require('../../models/user');

var admin = require('firebase-admin');
const serviceAccount = require('../../config/airbnb-98915-firebase-adminsdk-gletn-8349a714c5.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'airbnb-98915.firebaseio.com'
});

module.exports = (app) => {
    app.post('/api/auth/verifyUser', (req, res, next) => {
        console.log("/api/auth/verifyUser is being called");

        verifyAccount(req, function (callback) {
            return res.send(callback)
        })
    })
};

verifyAccount = (req, callback) => {
    const {query} = req;
    const {user} = query;

    userJson = JSON.parse(user);
    console.log("____________");
    console.log(userJson);
    console.log("____________");
    console.log("Verifying User");

    admin.auth().verifyIdToken(userJson.stsTokenManager.accessToken).then(function(decodedToken){
        console.log("user verified");
    }).catch(function(error){
        console.log(error)
    })

};