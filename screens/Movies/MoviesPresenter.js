import React from "react";
import styled from "styled-components/native";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List"
import Slide from "../../components/Slide";
import SliderContainer from "../../components/SliderContainer";

const Container = styled.View`
  /* padding: 0px 30px; */
`;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading} refreshFn={refreshFn}>
    <>
      <SliderContainer>
        {nowPlaying.map(movie => (
          <Slide key={movie.id} id={movie.id}
            title={movie.title}
            overview={movie.overview}
            votes={movie.vote_average}
            backgroundImage={movie.backdrop_path || ""}
            posterPath={movie.poster_path} />
        ))}
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"Populer Movies"}>
          {popular.map(movie => (
            <Vertical key={movie.id}
              id={movie.id}
              title={movie.title}
              votes={movie.vote_average}
              posterPath={movie.poster_path} />
          ))}
        </HorizontalSlider>
        <List title={"Comming Soon"}>
          {upcoming.map(movie => (
            <Horizontal key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              posterPath={movie.poster_path}
              overview={movie.overview} />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
