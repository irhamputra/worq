import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";

const Card = props => {
  return (
    <StyledView style={{ "box-shadow": "0 8px 6px -6px black" }}>
      <View>
        <Image
          style={{ width: 70, height: 70, marginRight: 20 }}
          source={{ uri: `${props.imageURI}` }}
        />
      </View>
      <View style={{ width: "70%" }}>
        <StyledHeader>{props.title}</StyledHeader>
        <StyledCardContent>{props.company}</StyledCardContent>
        <StyledCardMeta>{props.city}</StyledCardMeta>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Detail", {
              postId: `${props.id}`
            })
          }
        >
          <StyledButton>
            Detail
            <AntDesign style={{ marginLeft: 10 }} name="arrowright" size={12} />
          </StyledButton>
        </TouchableOpacity>
      </View>
    </StyledView>
  );
};

/* Style components */
const StyledView = styled.View`
  flex-direction: row;
  background-color: white;
  padding: 20px;
  border-width: 1px;
  border-radius: 7px;
  border-color: #ddd;
  margin: 10px 0;
`;

const StyledHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const StyledCardContent = styled.Text`
  margin-top: 10px;
  font-weight: bold;
`;

const StyledCardMeta = styled.Text`
  margin: 5px 0;
  color: gray;
`;

const StyledButton = styled.Text`
  padding: 10px 0;
  font-size: 15px;
  color: teal;
  font-weight: bold;
`;

export default withNavigation(Card);
