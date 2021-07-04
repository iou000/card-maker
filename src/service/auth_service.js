import firebase from 'firebase';
import firebaseApp from './firebase.js';

class AuthService {
    login(providerName) { 
        //provider는 각 플랫폼의 AuthProvier임.
        const provider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(provider) //각 플랫폼의 팝업으로 로그인
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user)
        });
    }

    logout() {
        firebase.auth().signOut();
    }

}

export default AuthService;