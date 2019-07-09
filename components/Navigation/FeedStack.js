import React from "react";
import { createStackNavigator } from "react-navigation";
import Feed from "../../screens/Feed";
import LogoTitle from "../LogoTitle";
import IconHeaderRight from "../IconHeaderRight";
import Detail from "../../screens/Detail";
import SearchLocation from "../../screens/SearchLocation";
import Notification from "../../screens/Notification";

const FeedStack = createStackNavigator({
  FeedHome: {
    screen: Feed,
    navigationOptions: {
      headerLeft: <LogoTitle />,
      headerRight: <IconHeaderRight />
    }
  },
  Detail,
  SearchLocation,
  Notification: {
    screen: Notification
  }
});

FeedStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default FeedStack;
