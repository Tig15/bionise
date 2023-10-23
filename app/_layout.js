import { View, Text } from "react-native";
import React from "react";
import MainLayout from "./root";
import { Provider } from "react-redux";
import store from "../redux/store";

const Layout = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};

export default Layout;
