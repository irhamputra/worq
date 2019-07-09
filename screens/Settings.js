import React, { Component } from "react";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>Settings Screen</StyledText>
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

export default Home;
