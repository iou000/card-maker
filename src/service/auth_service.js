import { firebaseAuth, googleProvider, facebookProvider, githubProvider } from './firebase';

class AuthService {
    login(providerName) { 
        //provider는 각 플랫폼의 AuthProvier임.
        const provider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(provider) //각 플랫폼의 팝업으로 로그인
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user)
        });
    }

    logout() {
        firebaseAuth.signOut();
    }

    //new firebase.auth[`${providerName}AuthProvider`]();
    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Facebook':
                return facebookProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider ${providerName}`)
        }
    }
}

export default AuthService;