import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import tailwind from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { registerUser } from "../../firebase/firebaseAuth";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleRegistration = async (values) => {
    const { email, password, firstName, lastName } = values;

    const registrationResult = await registerUser(
      email,
      password,
      firstName,
      lastName
    );

    if (registrationResult.success) {
      router.replace("/");
    } else {
      console.error(registrationResult.error);
    }
  };

  return (
    <View style={tailwind`flex-1  `}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleRegistration(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            style={
              Platform.OS == "web"
                ? tailwind` w-[400px] h-[440px] justify-center items-center rounded-lg bg-slate-100`
                : tailwind` w-[350px] h-[440px] pt-7 ml-[-12px]  items-center rounded bg-slate-100`
            }
          >
            <View style={tailwind`mb-3 gap-1`}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="black"
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                style={tailwind`w-80 h-10 border-slate-950 border mb-4 px-2 rounded`}
              />
              {touched.firstName && errors.firstName && (
                <Text
                  style={tailwind`text-xs text-red-600 absolute top-11 left-2`}
                >
                  {errors.firstName}
                </Text>
              )}
            </View>

            <View style={tailwind`mb-3 gap-1`}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="black"
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                style={tailwind`w-80 h-10 border-slate-950 border mb-4 px-2 rounded`}
              />
              {touched.lastName && errors.lastName && (
                <Text
                  style={tailwind`text-xs text-red-600 absolute top-11 left-2`}
                >
                  {errors.lastName}
                </Text>
              )}
            </View>

            <View style={tailwind`mb-3 gap-1`}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={tailwind`w-80 h-10 border-slate-950 border mb-4 px-2 rounded`}
              />
              {touched.email && errors.email && (
                <Text
                  style={tailwind`text-xs text-red-600 absolute top-11 left-2`}
                >
                  {errors.email}
                </Text>
              )}
            </View>

            <View style={tailwind`mb-3 gap-1`}>
              <View style={tailwind`relative`}>
                <TextInput
                  style={tailwind`w-80 h-10 border-slate-950 border mb-4 px-2 rounded`}
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
              {touched.password && errors.password && (
                <Text
                  style={tailwind`text-xs text-red-600 absolute top-11 left-2`}
                >
                  {errors.password}
                </Text>
              )}
            </View>

            <View style={tailwind`mb-3 gap-1`}>
              <View style={tailwind`relative`}>
                <TextInput
                  style={tailwind`w-80 h-10 border-slate-950 border mb-4 px-2 rounded`}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  placeholder="Confirm Password"
                  placeholderTextColor="black"
                  secureTextEntry={!showCPassword}
                />
                <TouchableOpacity
                  style={tailwind`absolute top-[11px] right-2`}
                  onPress={() => setShowCPassword(!showCPassword)}
                >
                  {showCPassword ? (
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
              {touched.confirmPassword && errors.confirmPassword && (
                <Text
                  style={tailwind`text-xs text-red-600 absolute top-11 left-2`}
                >
                  {errors.confirmPassword}
                </Text>
              )}
            </View>

            <TouchableOpacity
              style={tailwind`bg-blue-800 p-2 rounded items-center mt-2 w-80  `}
              onPress={handleSubmit}
            >
              <Text style={tailwind`text-slate-100 text-sm`}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RegForm;
