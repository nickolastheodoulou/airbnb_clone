import React, { Component } from 'react';
import firebase from "firebase";
import StyledFirebaseUi from "react-firebaseui/StyledFirebaseAuth";
import axios from 'axios';

import 'whatwg-fetch';

firebase.initializeApp({
    apiKey: 'AIzaSyBvaximGzkJlI3Q2LTJnNfICCoG0yYdq_U',
    authDomain: 'airbnb-98915.firebaseapp.com'
});

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // TOD: add api call to save user
            axios.post('/api/auth/verifyUser', null, {params: {user: firebase.auth().currentUser}})
                .then(res => {
                    console.log(res)
                });
            return true;
        }
        // ,
        // uiShown: function() {
        //     // The widget is rendered.
        //     // Hide the loader.
        //     document.getElementById('loader').style.display = 'none';
        // }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'redirect',
    signInSuccessUrl: '/',  // User wil be redirected to the home page
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID

    ]
    //,
    // Terms of service url.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url.
    // privacyPolicyUrl: '<your-privacy-policy-url>'
};

class Login extends Component {
    constructor(props) {
        super(props);

        this.state={
            isAuthenticated : false
        }
    }

    componentDiMount() {
        // add a firebase auth listener
        firebase.auth().onAuthStateChanged(user => { // When the Auth changes
            this.setSate({isAuthenticated : !this.state.isAuthenticated}) // set variable isAuthenticated to
        })
    }

    render() {
        return (
            <>
                <h3>Login</h3>
                <StyledFirebaseUi
                    uiConfig = {uiConfig}
                    firebaseAuth = {firebase.auth()}
                />
            </>
        );
    }
}

export default Login;
