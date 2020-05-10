import React from "react";
//  import { View, Text } from 'react-native'
import styled from "styled-components/native";

const Logo = (props) => {
  const { image, text } = props;
  return (
    <Container>
      <Image source={image} />
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.View.attrs({
  elevation: 10
})`
  flex-direction: row;
  background-color: #fff;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
  margin: 5px 8px;
`;

const Image = styled.Image.attrs({
  resizeMode:'contain'
})`
  width: 36px;
  height: 36px;

`;
const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;

export default Logo;
