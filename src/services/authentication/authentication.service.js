import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const auth = getAuth();

export const signInRequest = async (payload = {}) => {
  try {
    const { email, password } = payload;
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log(e);
  }
};

export const signUpRequest = async (payload = {}) => {
  try {
    const { email, password, name, surname } = payload;
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        if (userCredential.user) {
          updateProfile(userCredential.user, {
            displayName: `${name} ${surname}`,
          });
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
};

export const signOutRequest = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.log(e);
  }
};
