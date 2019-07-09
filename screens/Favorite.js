import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import styled from "styled-components";

class Favorite extends Component {
  render() {
    return (
      <StyledView>
        <SafeAreaView>
          <StyledText>Favorite Screen</StyledText>
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

export default Favorite;
