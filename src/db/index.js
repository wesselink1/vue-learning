import Vue from "vue";
import Firebase from "firebase";
import VueFire from "vuefire";

Vue.use(VueFire);

const config = {
    apiKey: "AIzaSyCH1nA2ONwMuUR40sMjIosUj-5_qDBKS98",
    authDomain: "vue-learning-4ae11.firebaseapp.com",
    databaseURL: "https://vue-learning-4ae11.firebaseio.com",
    projectId: "vue-learning-4ae11",
    storageBucket: "vue-learning-4ae11.appspot.com",
    messagingSenderId: "1046113302284"
};

const FireBaseApp = Firebase.initializeApp(config);
const FireDB = FireBaseApp.database();
const firebase = function() {
    return {
        tvshows: FireDB.ref()
    }
}

export {
    firebase
}