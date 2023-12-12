let firebaseConfig = {
        apiKey: "AIzaSyD-lnFRUNaQnImXR9mrZns5FNjMiv2TpAc",
        authDomain: "wordweaver-b0262.firebaseapp.com",
        projectId: "wordweaver-b0262",
        storageBucket: "wordweaver-b0262.appspot.com",
        messagingSenderId: "472695401135",
        appId: "1:472695401135:web:02e965c73eae94de57c25a"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();