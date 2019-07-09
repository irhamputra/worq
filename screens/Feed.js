import React, { useEffect } from "react";
import { StatusBar } from 'react-native';
import styled from "styled-components";
import { SafeAreaView } from "react-navigation";

// Components
import Card from "../components/Card";
import Location from "../components/Location";

// mockup data
import { data } from "../MockData";

const Feed = (props) => {
  const getData = () => {
    return data.map(({ id, title, company, city, imageURI }) => (
      <Card
        id={id}
        key={id}
        title={title}
        company={company}
        city={city}
        imageURI={imageURI}
      />
    ));
  };

  return (
    <StyledView>
      <SafeAreaView>
        <Location />
        <StyledCardWrapper>
          <StyledText>Popular now in</StyledText>
          {getData()}
        </StyledCardWrapper>
      </SafeAreaView>
    </StyledView>
  );
};

const StyledView = styled.ScrollView`
  flex: 1;
  background-color: whitesmoke;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const StyledCardWrapper = styled.View`
  padding: 0 20px;
  margin-top: -110px;
`;

export default Feed;
