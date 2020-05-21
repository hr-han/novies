import React from "react";
import { View, Text, Dimensions, ActivityIndicator, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title"
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");


const Container = styled.View`
  /* padding: 0px 30px; */
`;

const SliderContainer = styled.View`
    width:100%;
    height:${HEIGHT / 4}px;
    margin-bottom: 50px;
`

const UpcomingContainer = styled.View`
  margin-top:20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView style={{ backgroundColor: "black"}} contentContainerStyle={{ justifyContent: loading? "center" : "flex-start"}}>
    {loading ? (
      <ActivityIndicator color="white" size="large" />
    ) : (
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map(movie => (
                <Slide key={movie.id} id={movie.id} 
                  title={movie.title} 
                  overview={movie.overview}
                  votes={movie.vote_average} 
                  backgroudImage={movie.backdrop_path||""}
                  posterPath={movie.poster_path}/>
            ))}
          </Swiper>
        </SliderContainer>
        <Container>
            <Title title={"Popular Movies"}/>
            <ScrollView contentContainerStyle={{marginTop:20, marginBottom:40, paddingLeft:30}} horizontal showsHorizontalScrollIndicator={false}>
              {popular.map(movie => (
                <Vertical key={movie.id} 
                  id={movie.id}
                  title={movie.title}
                  votes={movie.vote_average}
                  posterPath={movie.poster_path} />
              ))}
            </ScrollView>
            <Title title={"Coming Soon"} />
            <UpcomingContainer>
              {upcoming.map(movie => (
                <Horizontal key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  posterPath={movie.poster_path}
                  overview={movie.overview} />
              ))}
            </UpcomingContainer>
          </Container>
        </>
    )}
  </ScrollView>
);
