const userModel = require('../models/user');

var admin = require('firebase-admin');
const serviceAccount = require('../config/airbnb-98915-firebase-adminsdk-gletn-8349a714c5.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'airbnb-98915.firebaseio.com'
});

module.exports = {
    /*
    * Check if user token is valid, if it is, the user is logged in

     */
    verifyAccount: function (user){
        return new Promise(function (resolve, reject) {

            userJson = JSON.parse(user);
            console.log("____________");
            console.log(userJson);
            console.log("____________");
            console.log("Verifying User");

            admin.auth().verifyIdToken(userJson.stsTokenManager.accessToken).then(function(decodedToken){
                console.log("user verified");

                // if the user is verified see if it is in the mongo database
                userModel.findOne({googleId: userJson.uid}).then(function (user) {
                    if(!user){
                        new userModel({
                            name : userJson.displayName,
                            email : userJson.email,
                            googleId: userJson.uid
                        }).save().then(function (error, user) {
                            if(error){
                                reject({
                                    code:400,
                                    success: false,
                                    message: 'auth denied: could not create a new user',
                                    user: error
                                })
                            }
                            resolve({
                                code:200,
                                success: true,
                                message: 'auth confirmed: new user created',
                                user: user
                            })
                        })
                    }
                    else {
                        resolve({
                            code: 200,
                            success: true,
                            message: 'auth confirmed: existing user',
                            user: user
                        })
                    }

                })
            }).catch(function(error){
                console.log(error)
            })
        });

    }
};