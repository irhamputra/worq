import React from "react";
import styled from "styled-components";
import { withNavigation } from 'react-navigation';
import { AntDesign } from "@expo/vector-icons";

const IconHeaderRight = (props) => (
  <StyledIconHeaderRight onPress={() => props.navigation.navigate('Notification')}>
    <AntDesign name="inbox" size={25} />
  </StyledIconHeaderRight>
);

const StyledIconHeaderRight = styled.TouchableOpacity`
  padding-right: 20px;
`;

export default withNavigation(IconHeaderRight);
