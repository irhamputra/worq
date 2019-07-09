import React from "react";
import { withNavigation } from "react-navigation";
import { View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components";

const Location = props => (
  <StyledHeader>
    <View>
      <StyledTextHeader>
        <Entypo name="location-pin" size={20} />
        Location
      </StyledTextHeader>
    </View>
    <TouchableOpacity onPress={() => props.navigation.navigate("SearchLocation")}>
      <StyledLocation>Leipzig</StyledLocation>
    </TouchableOpacity>
  </StyledHeader>
);

const StyledHeader = styled.View`
  padding-top: 10px;
  padding-bottom: 150px;
  background: teal;
`;
const StyledTextHeader = styled.Text`
  font-size: 16px;
  color: white;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`;

const StyledLocation = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: white;
  padding: 10px 20px 10px 20px;
  text-decoration: underline rgba(255, 255, 255, 0.6);
`;

export default withNavigation(Location);
