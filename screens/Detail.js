import React from "react";
import { View, Text, Dimensions } from "react-native";
import styled from "styled-components/native";
import ScrollContainer from "../components/ScrollContainer"
import { apiImage } from "../api";
import Poster from "../components/Poster";
import Votes from "../components/Votes";

const BG = styled.Image`
  width:100%;
  height: ${Dimensions.get("window").height / 3}px;
  opacity:0.4;
  position:absolute;
`;

const Container = styled.View`

`;

const Header = styled.View`
`;

const Info = styled.View``;

const Title = styled.Text`
color: white;
`;

export default ({ 
  navigation, 
  route: { params: { id, title, posterPath, backgroudImage, votes} }}) => {
  // header title 설정
  navigation.setOptions({ title });

  return(
    <ScrollContainer loading={false} >
      <Header>
        <BG source={{ uri: apiImage(backgroudImage, "")}}/>
        <Container>
          <Poster url={posterPath}/>
          <Info>
            <Title>{title}</Title>
            {votes > 0 && (<Votes votes={votes} />)}
          </Info>
        </Container>
      </Header>
    </ScrollContainer>
  )
}
