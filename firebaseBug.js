const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/auth/web/user-properties
  console.log(user);
} else {
  // User is signed out
  // ...
}
});
// unsubscribe(); //this line was missing, causing the listener to persist even after component unmount

// ... later in the component lifecycle

// This cleanup was not done before.  The listener needs to be unsubscribed
unsubscribe();