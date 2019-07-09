import React, { Component } from "react";
import styled from "styled-components";

class SearchLocation extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>SearchLocation Screen</StyledText>
        <StyledButton title="Save" onPress={() => this.props.navigation.goBack()}/>
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const StyledButton = styled.Button`
  font-size: 20px;
`;

export default SearchLocation;
