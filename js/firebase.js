<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD_TObaQ7bO7sxHGxv3nest8dmj14hvzls",
    authDomain: "krstechnology.firebaseapp.com",
    projectId: "krstechnology",
    storageBucket: "krstechnology.appspot.com",
    messagingSenderId: "66525544233",
    appId: "1:66525544233:web:9131ae19872be35bd2c138",
    measurementId: "G-4TQ2YR83RD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
