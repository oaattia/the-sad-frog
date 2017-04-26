import firebase from 'firebase';

class Database {

    constructor() {
        
        // don't try to use the old credientials as i removed them from Firebase dashboard
        let config = {
            apiKey: "******",
            authDomain: "******",
            databaseURL: "***",
            projectId: "sad-frog-60e99",
            storageBucket: "sad-frog-60e99.appspot.com",
            messagingSenderId: "****"
        };

        firebase.initializeApp(config);

        let database = firebase.database();

        return database;
    }

}

export default Database;
