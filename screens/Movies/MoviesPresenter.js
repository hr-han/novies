import React from "react";
import { View, Text, Dimensions, ActivityIndicator, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title"

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");


const Container = styled.View`
  /* flex: 1;
  background-color: black;
  justify-content: center; */
`;

const SliderContainer = styled.View`
    width:${WIDTH}px;
    height:${HEIGHT / 4}px;
    margin-bottom: 50px;
`

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView style={{ backgroundColor: "black" }} contentContainerStyle={{flex:1, justifyContent: loading? "center" : "flex-start"}}>
    {loading ? (
      <ActivityIndicator color="white" size="large" />
    ) : (
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map(movie => (
                <Slide key={movie.id} id={movie.id} 
                  title={movie.original_title} 
                  overview={movie.overview}
                  votes={movie.vote_average} 
                  backgroudImage={movie.backdrop_path||""}
                  posterPath={movie.poster_path}/>
            ))}
          </Swiper>
        </SliderContainer>
        <Container>
            <Title title={"Popular Movies"}/>
          </Container>
        </>
    )}
  </ScrollView>
);
