import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_DB } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (email, password, firstName, lastName) => {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    const { uid } = user;

    const userObject = {
      firstName,
      lastName,
      email,
      password,
    };

    const userDocRef = doc(FIREBASE_DB, "users", uid);

    await setDoc(userDocRef, userObject);

    return { success: true, user: userObject };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
