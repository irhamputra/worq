import React from 'react'
import { createBottomTabNavigator } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";

// screens
import FeedStack from "./FeedStack";
import Search from "../../screens/Search";
import ProfileStack from "./ProfileStack";
import Favorite from "../../screens/Favorite";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: FeedStack
    },
    Search,
    Favorite,
    Profile: {
      screen: ProfileStack
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = AntDesign;
        let iconName;

        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Search") {
          iconName = "search1";
        } else if (routeName === "Profile") {
          iconName = "user";
        } else if (routeName === "Favorite") {
          iconName = "hearto";
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

export default TabNavigator;
