import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const auth = getAuth();

export const signInRequest = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      return userCredential.user;
    }
  );
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
