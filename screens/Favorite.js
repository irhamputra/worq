import React, { Component } from "react";
import { StatusBar, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import styled from "styled-components";
import Card from "../components/Card";

class Favorite extends Component {
  render() {
    return (
      <StyledView>
        <StatusBar backgroundColor="blue" translucent barStyle="dark-content" />
          <StyledWrapper>
            <StyledText>Likes</StyledText>
          </StyledWrapper>

          <StyledCardWrapper>
            <Card
              id={9}
              title="Senior React/Node Developer"
              company="GoldMarke GmbH"
              city="Essen, Germany"
              imageURI="https://www.goldmarke-agentur.de/wp-content/uploads/2017/12/logo_klein2.png"
            />
          </StyledCardWrapper>
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
`;

const StyledWrapper = styled.View`
  padding: 50px 20px;
  background-color: teal;
`;

const StyledCardWrapper = styled.ScrollView`
  padding: 10px 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export default Favorite;
