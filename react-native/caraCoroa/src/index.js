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
          backgroundColor: "#E52A6F"
        },
        headerTitleStyle: {
          color: "#FFF",
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
          flex: 1
        }
      }
    },
    "modal"
  )
);

export default Routes;
