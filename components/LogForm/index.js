import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { ref } from "yup";
import tailwind from "twrnc";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_APP } from "../../firebase/firebaseConfig";
import Cookies from "js-cookie";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    loadSavedCredentials();
  }, []);

  const loadSavedCredentials = async () => {
    if (Platform.OS === "web") {
      const savedEmail = Cookies.get("email");
      const savedRememberMe = Cookies.get("rememberMe");

      if (savedEmail && savedRememberMe === "true") {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    } else {
      const savedEmail = await AsyncStorage.getItem("email");
      const savedRememberMe = await AsyncStorage.getItem("rememberMe");

      if (savedEmail && savedRememberMe && savedPassword === "true") {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    }
  };

  const handleLogin = async (values) => {
    const auth = getAuth(FIREBASE_APP);
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (rememberMe) {
        if (Platform.OS === "web") {
          Cookies.set("email", email, { expires: 365 });
          Cookies.set("rememberMe", "true", { expires: 365 });
        } else {
          await AsyncStorage.setItem("email", email);
          await AsyncStorage.setItem("rememberMe", "true");
        }
      } else {
        if (Platform.OS === "web") {
          Cookies.remove("email");
          Cookies.remove("rememberMe");
          Cookies.remove("passsword");
        } else {
          await AsyncStorage.removeItem("email");
          await AsyncStorage.removeItem("rememberMe");
        }
      }

      router.replace("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={tailwind`flex-1 `}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View
            style={tailwind` w-[320px] h-[300px] justify-center items-center rounded-2xl bg-slate-100`}
          >
            <View style={tailwind`mb-4 gap-1`}>
              <TextInput
                style={tailwind`w-70 h-10 border-slate-950 border mb-4 px-2 rounded`}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
                placeholderTextColor="black"
              />
              {errors.email && (
                <Text
                  style={tailwind`text-xs text-red-600 absolute top-11 left-2`}
                >
                  {errors.email}
                </Text>
              )}
            </View>

            <View style={tailwind`mb-4 gap-1`}>
              <View style={tailwind`relative`}>
                <TextInput
                  style={tailwind`w-70 h-10 border-slate-950 border mb-4 px-2 rounded`}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Password"
                  placeholderTextColor="black"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={tailwind`absolute top-[11px] right-2`}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <MaterialCommunityIcons
                      name="eye-off-outline"
                      size={20}
                      color="#072541"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="eye-outline"
                      size={20}
                      color="#072541"
                    />
                  )}
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text
                  style={tailwind`text-xs text-red-600 absolute top-11 left-2`}
                >
                  {errors.password}
                </Text>
              )}
            </View>

            <View style={tailwind`absolute bottom-23 left-1`}>
              <Pressable
                style={({ pressed }) => [
                  tailwind`w-40 flex-row justify-center items-center  border-slate-950 gap-2 mb-1 rounded`,
                  pressed && { backgroundColor: "lightgrey" },
                ]}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <Text style={tailwind`text-black`}>Remember Me</Text>
                {rememberMe && (
                  <MaterialCommunityIcons
                    name="checkbox-marked"
                    size={20}
                    color="#072541"
                    style={tailwind``}
                  />
                )}
                {!rememberMe && (
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={20}
                    color="#072541"
                    style={tailwind``}
                  />
                )}
              </Pressable>
            </View>

            <TouchableOpacity
              style={tailwind`border border-blue-800 p-2 rounded items-center mt-6 w-70`}
              onPress={handleSubmit}
            >
              <Text style={tailwind`text-blue-800 text-sm`}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must have at least 8 characters")
    .required("Password is required"),
});

export default LogForm;
