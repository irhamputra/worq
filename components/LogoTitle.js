import React from "react";
import * as Font from "expo-font";
import styled from "styled-components";

class LogoTitle extends React.Component {
  state = {
    fontLoaded: false
  };

  componentDidMount() {
    Font.loadAsync({
      cocogoose: require("../assets/fonts/Cocogoose.ttf")
    }).then(() => this.setState({ fontLoaded: true }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fontLoaded === true && (
          <StyledLogoTitle
            style={{
              fontFamily: "cocogoose"
            }}
          >
            worq
          </StyledLogoTitle>
        )}
      </React.Fragment>
    );
  }
}

const StyledLogoTitle = styled.Text`
  padding-left: 20px;
  font-size: 25px;
  font-weight: bold;
  color: teal;
`;

export default LogoTitle;
