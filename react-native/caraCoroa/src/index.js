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
        title: "Cara e coroa"
      }
    },
    "modal"
  )
);

export default Routes;
