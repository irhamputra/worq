import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import styled from "styled-components";

class Profile extends Component {
  render() {
    return (
      <StyledView>
        <SafeAreaView>
          <StyledText>Profile Screen </StyledText>
          <StyledButton
            title="Sign out"
            onPress={() => this.props.navigation.navigate("Auth")}
          />
          <StyledButton
            title="Settings"
            onPress={() => this.props.navigation.navigate("Settings")}
          />
        </SafeAreaView>
      </StyledView>
    );
  }
}

const StyledView = styled.ScrollView`
  flex: 1;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const StyledButton = styled.Button`
  font-size: 20px;
`;

export default Profile;
