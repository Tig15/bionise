import React, { useState } from "react";
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

const LogForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (values) => {
    const { email, password } = values;
    const auth = getAuth(FIREBASE_APP);

    try {
      await signInWithEmailAndPassword(auth, email, password);

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
            style={tailwind`border w-[350px] h-[400px] justify-center items-center rounded bg-slate-100`}
          >
            <View style={tailwind`mb-6 gap-1`}>
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

            <View style={tailwind`mb-6 gap-1`}>
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

            <TouchableOpacity
              style={tailwind`border border-blue-800 p-2 rounded items-center mt-2 w-70  `}
              onPress={handleSubmit}
            >
              <Text style={tailwind`text-blue-800 text-sm`}>Login</Text>
            </TouchableOpacity>

            {/* <View style={tailwind`flex flex-col items-center mt-5 gap-2`}>
              <Text style={tailwind`text-xs`}>Not Registered?</Text>
              <Pressable onPress={() => router.replace("/register")}>
                <Text style={tailwind`text-xs underline `}>
                  Create Your Own Account
                </Text>
              </Pressable>
            </View> */}
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
