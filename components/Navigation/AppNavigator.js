import React from "react";
import { createSwitchNavigator } from "react-navigation";
import TabNavigator from "../Navigation/TabNavigator";

import Auth from "../../screens/Auth";

const AppNavigator = createSwitchNavigator(
  {
    Auth,
    TabNavigator
  },
  {
    initialRouteName: "TabNavigator"
  }
);

export default AppNavigator;
