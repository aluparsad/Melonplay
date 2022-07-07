import { auth } from './firebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence, signOut, updateProfile } from 'firebase/auth'


const handleAuthCall = (authCall, email, password, onSuccess, onFailure) => {
    authCall(auth, email, password)
        .then(creds => onSuccess(creds))
        .catch(err => onFailure(err))
}

const signInUser = (email, password, onSuccess, onFailure) => {
    handleAuthCall(signInWithEmailAndPassword, email, password, onSuccess, onFailure)
}

const signUpUser = (email, password, onSuccess, onFailure) => {
    handleAuthCall(createUserWithEmailAndPassword, email, password, onSuccess, onFailure)
}

const logout = () => {
    signOut(auth)
}

const authState = (onChange) => {
    auth.onAuthStateChanged(user => {
        onChange(user)
    })
}

const updateUserInfo = (info) => {
    updateProfile(auth.currentUser, info)
}

export { signInUser , signUpUser, logout, authState, updateUserInfo};