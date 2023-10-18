import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { FIREBASE_APP } from "./firebaseConfig";
import { useNavigation } from "expo-router";

const withUserInfo = (WrappedComponent) => {
  return (props) => {
    const db = getFirestore();
    const auth = getAuth(FIREBASE_APP);
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
      fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDocRef = doc(db, "users", userId);

        try {
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            setUserInfo(userDocSnapshot.data());
          } else {
            console.error("User document not found");
          }
        } catch (error) {
          console.error("Error fetching user information:", error);
        }
      } else {
        navigation.navigate("index");
      }
    };

    return <WrappedComponent userInfo={userInfo} {...props} />;
  };
};

export default withUserInfo;
