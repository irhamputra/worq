import React from "react";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import styled from "styled-components";

// mockup data
import { data } from "../MockData";

const Detail = props => {
  const { postId } = props.navigation.state.params;

  const result = data.filter(payload => {
    return parseInt(postId) === payload.id;
  });

  return (
    <StyledView>
      <SafeAreaView>
        <StyledWrapper>
          {result.map(el => (
            <View key={el.id}>
              <Image
                style={{ width: 70, height: 70 }}
                source={{ uri: `${el.imageURI}` }}
              />
              <StyledText>{el.title}</StyledText>
              <StyledCompany>{el.company}</StyledCompany>
              <StyledCity>{el.city}</StyledCity>
              <Text>{el.aboutUs}</Text>
            </View>
          ))}
        </StyledWrapper>
      </SafeAreaView>
    </StyledView>
  );
};

const StyledView = styled.ScrollView`
  flex: 1;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const StyledWrapper = styled.View`
  padding: 20px;
`;

const StyledCompany = styled.Text`
  font-weight: bold;
  margin: 10px 0;
`;

const StyledCity = styled.Text`
  margin-bottom: 10px;
  color: gray;
`;

export default Detail;
