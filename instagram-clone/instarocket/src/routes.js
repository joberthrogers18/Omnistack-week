import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Image, StyleSheet } from "react-native";

import Feed from "./pages/Feed";
import New from "./pages/New";

import logo from "./assets/logo.png";

// Necessário para definir as rotas da aplicação
// createStackNavigator navigator cria uma navbar e seu modo de uso é a navegação em pilha
// Existe também o createBottomTabNavigator que fica uma nav no lugar do footer
export default createAppContainer(
  createStackNavigator(
    {
      Feed,
      New
    },
    {
      initialRouteName: "New",
      defaultNavigationOptions: {
        headerTitle: (
          <Image
            style={{ width: 100, height: 30, flex: 1 }}
            resizeMode="contain"
            source={logo}
          />
        ),
        headerBackTitle: null,
        headerTintColor: "#000"
      },
      mode: "modal"
    }
  )
);
