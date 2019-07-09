import { createStackNavigator } from "react-navigation";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  Settings
});

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default ProfileStack;
