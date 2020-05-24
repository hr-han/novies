import React from "react"
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native"
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";
import SliderContainer from "../../components/SliderContainer";
import Slide from "../../components/Slide";

const Container = styled.View`
    margin-top: 30px;
`;

export default ({ refreshFn, loading, popular, topRated, today, thisWeek}) => (
    <ScrollContainer loading={loading} refreshFn={refreshFn}>
        <Container>
            <HorizontalSlider title={"Popular Shows"}>
                {popular.map(show => 
                    <Vertical key={show.id}
                        id={show.id}
                        title={show.name}
                        votes={show.vote_average}
                        posterPath={show.poster_path} />
                )}
            </HorizontalSlider>
            <SliderContainer title={"ThisWeek Shows"}>
                {thisWeek.map(show => (
                    <Slide key={show.id} id={show.id}
                        title={show.name}
                        overview={show.overview}
                        votes={show.vote_average}
                        backgroudImage={show.backdrop_path || ""}
                        posterPath={show.poster_path} />
                ))}
            </SliderContainer>
            <HorizontalSlider title={"Top Rated"}>
                {topRated.map(show =>
                    <Vertical key={show.id}
                        id={show.id}
                        title={show.name}
                        votes={show.vote_average}
                        posterPath={show.poster_path} />
                )}
            </HorizontalSlider>
            <List title={"Airing Today"}>
                {today.map(show => (
                    <Horizontal key={show.id}
                        id={show.id}
                        title={show.name}
                        posterPath={show.poster_path}
                        overview={show.overview} />
                ))}
            </List>
        </Container>
    </ScrollContainer>
)
