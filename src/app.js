import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAZesTFHXvayul-dgBhOMkvJEAcN9Qdfuo',
            authDomain: 'authorization-25e83.firebaseapp.com',
            databaseURL: 'https://authorization-25e83.firebaseio.com',
            projectId: 'authorization-25e83',
            storageBucket: 'authorization-25e83.appspot.com',
            messagingSenderId: '365727388387'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App; 