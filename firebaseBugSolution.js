import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'; //your firebase config

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

// ... later in the component lifecycle (e.g., componentWillUnmount in class component or useEffect cleanup in functional component)

return () => {
unsubscribe();
};
