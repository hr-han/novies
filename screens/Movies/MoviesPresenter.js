import React from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/movies/Slide";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;



export default ({ loading, nowPlaying, popular, upcoming }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" size="large" />
    ) : (
      <>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map(movie => (
              <Slide key={movie.id} id={movie.id} 
                title={movie.original_title} overview={movie.overview}
                votes={movie.vote_average} 
                backgroudImage={movie.backdrop_path}/>
          ))}
        </Swiper>
      </>
    )}
  </Container>
);
