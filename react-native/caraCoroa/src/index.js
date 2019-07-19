import Menu from "./pages/Menu";
import Game from "./pages/Game";

import { createAppContainer, createStackNavigator } from "react-navigation";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Menu,
      Game
    },
    {
      defaultNavigationOptions: {
        title: "Cara e coroa",
        headerStyle: {
          backgroundColor: "#6BBAA7"
        },
        headerTitleStyle: {
          color: "#FFF",
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
          flex: 1
        },
        headerTintColor: "#fff"
      },
      initialRouteName: "Menu"
    },
    "modal"
  )
);

export default Routes;
