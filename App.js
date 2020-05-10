import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';
import Card from "./components/Card";
import {NotificationIcon} from './components/Icons'

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back, </Title>
            <Name>Edson Luiz</Name>
            <NotificationIcon
              style={{
                position: 'absolute',
                right: 20,
                top: 5
              }}
            />
          </TitleBar>
          <SubTitle>Continue Learning</SubTitle>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card
              title="Styled components"
              image={require("./assets/background2.jpg")}
              caption="React antive"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />
            <Card
              title="Styled components 2"
              image={require("./assets/background2.jpg")}
              caption="React antive"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  background-color: #000;

  position: absolute;
  top: 0;
  left: 0;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 900;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
