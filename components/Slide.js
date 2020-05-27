import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import { apiImage } from "../api";
import Poster from "./Poster";
import Votes from "./Votes"
import {trimText} from "../utils"
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
`;

const Content = styled.View`
  height:100%;
  flex-direction: row;
  align-items:center;
  justify-content: space-around;

`;

const Data = styled.View`
  width:50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color:white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom:7px;
`;

const VotesContainer = styled.View`
  margin-bottom:7px;
`;

const Overview = styled.Text`
  color:rgb(220,220,220);
  font-size:14px;
  font-weight:500;
`;

const Button = styled.View`
  margin-top:10px;
  background-color: #e74c3c;
  padding: 7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color:white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, posterPath, isTv=false }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", { id, title, posterPath, overview, votes, backgroundImage, isTv})
  }

  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }}
      />
      <Content>
        <Poster url={posterPath} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          {/* <Votes>⭐ {votes}/10</Votes> */}
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{trimText(overview, 110)}</Overview>
          <TouchableOpacity onPress={goToDetail}>
            <Button>
              <ButtonText>View details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  )
}

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired
}

export default Slide;