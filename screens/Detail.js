import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
import styled from "styled-components";

// mockup data
import { data } from "../MockData";

const Detail = props => {
  const { postId } = props.navigation.state.params;

  const result = data.filter(payload => {
    return parseInt(postId) === payload.id;
  });

  const onGoBack = () => {
    props.navigation.goBack();
  };

  const onFavorite = () => {
    alert(`You have liked #${postId}`);
  };

  return (
    <StyledView>
      <SafeAreaView>
        {result.map(el => (
          <View key={el.id}>
            <StyledWrapper>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <StyledGoBack onPress={() => onGoBack()}>
                  <AntDesign name="arrowleft" size={20} color="white" />
                </StyledGoBack>

                <StyledFavorite onPress={() => onFavorite()}>
                  <AntDesign name="hearto" size={20} />
                </StyledFavorite>
              </View>
              <Image
                style={{ width: 70, height: 70, marginBottom: 20 }}
                source={{ uri: `${el.imageURI}` }}
              />
              <StyledTitle>{el.title}</StyledTitle>

              <StyledCompany>{el.company}</StyledCompany>

              <StyledCity>{el.city}</StyledCity>

              <Text style={{ marginBottom: 100 }}>{el.aboutUs}</Text>
            </StyledWrapper>

            <View
              style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
            >
              <StyledButton onPress={() => alert(`Your application has been sent to ${el.company}`)}>
                <StyledApplyButton>Apply now</StyledApplyButton>
              </StyledButton>
            </View>
          </View>
        ))}
      </SafeAreaView>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
`;

const StyledTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const StyledWrapper = styled.ScrollView`
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

const StyledButton = styled.TouchableOpacity`
  background-color: teal;
  padding: 20px;
`;

const StyledApplyButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const StyledGoBack = styled.TouchableOpacity`
  padding: 5px;
  margin-bottom: 20px;
  background-color: rgba(0, 128, 128, 0.5);
  border-radius: 50px;
  width: 30px;
  height: 30px;
`;

const StyledFavorite = styled.TouchableOpacity`
  padding: 5px;
  margin-bottom: 20px;
  width: 30px;
  height: 30px;
`;

export default Detail;
