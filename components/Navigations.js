import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./Navigation/AppNavigator";

export const AppContainer = createAppContainer(AppNavigator);
