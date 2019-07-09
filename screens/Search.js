import React, { Component } from "react";
import styled from "styled-components";

class Search extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>Search Screen </StyledText>
        <StyledButton title="Next page" onPress={() => this.props.navigation.navigate('Detail')}/>
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

export default Search;
