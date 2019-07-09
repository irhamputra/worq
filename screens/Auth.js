import React, { Component } from "react";
import styled from "styled-components";

class Auth extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>Auth Screen </StyledText>
        <StyledButton title="Sign In" onPress={() => this.props.navigation.navigate('TabNavigator')}/>
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const StyledButton = styled.Button`
  font-size: 20px;
`;

export default Auth;
