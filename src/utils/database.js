import {DB} from './firebaseConfig'
import {doc, setDoc, collection, addDoc, getDoc, query} from 'firebase/firestore';

const USERS = "USERS";
const UID = 'uid';
const usersCol = collection(DB, USERS);

const addUser = async (user, cb) => {
    const docRef = await addDoc(usersCol, user);
}

const getUser = async (uid, cb) => {
    const userRef = doc(DB, USERS, uid);
    const userSnap = await getDoc(userRef);

    if(userSnap.exists()) {
        cb(userSnap.data())
        return;
    }
    cb(null);
}
