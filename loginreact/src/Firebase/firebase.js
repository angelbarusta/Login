import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDDOq8w2q1xa9cTyH7e_Ll78X7SJbxHP8M",
  authDomain: "chatbot-cielo.firebaseapp.com",
  databaseURL: "https://chatbot-cielo.firebaseio.com",
  projectId: "chatbot-cielo",
  storageBucket: "chatbot-cielo.appspot.com",
  messagingSenderId: "307519552945",
  appId: "1:307519552945:web:381e66fa03eb7aef459190",
  measurementId: "G-WK4Z2GE5QG"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();
    // this.dbfs = app.firestore();

    // var userid= app.auth().currentUser;
    // var uuid=userid.uid;

    this.googleProvider = new app.auth.GoogleAuthProvider();

    this.facebookProvider = new app.auth.FacebookAuthProvider();

    // this.fieldValue = app.firestore.FieldValue;
    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (
    email,
    password // para registrar nuevo usuario
  ) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (
    email,
    password //para ingresar con cuenta autenticada
  ) => this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider); //para inicio por google

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider); //con facebook

  doSignOut = () => this.auth.signOut(); //para salir de la cuenta

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email); //para resetiar contraseña

  doPasswordUpdate = (
    password //para cambiar contraseña
  ) => this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`); //para mostrar usuario en perfil

  users = () => this.db.ref("users"); //para mostrar usuarios registrados en admi

  //  userfs = uid => this.dbfs.doc(`users/${uid}`);

  //  usersfs = () => this.dbfs.collection('users');

  // *** Message API ***

  message = (uid) => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref("messages");

  // messagefs = uid => this.dbfs.doc(`messages/${uid}`);

  // messagesfs = () => this.dbfs.collection('messages');
}

export default Firebase;
