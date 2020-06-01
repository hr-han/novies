import React from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer"
import { apiImage } from "../../api";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes"
import { formatDate } from "../../utils"
import { TouchableOpacity } from "react-native-gesture-handler";
import Link from "../../components/Detail/Link";

const BG = styled.Image`
  width:100%;
  height:100%;
  opacity:0.4;
  position:absolute;
`;


const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction:row;
  align-items:center;
  top: 30px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  width:50%;
  margin-left: 40px;
`;

const Data = styled.View`
  padding: 0 30px;
  margin-top: 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 900;
  margin-bottom: 15px;
  margin-top:30px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.5;
  font-weight: 500;
`;



export default ({ result, loading, openBrowser }) => (
  <ScrollContainer
    loading={false}
    contentContainerStyle={{ paddingBottom: 80 }}
  >
    <Header>
      <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
      <Container>
        <Poster url={result.posterPath} />
        <Info>
          <Title>{result.title}</Title>
          {result.votes ? <Votes votes={result.votes} />:null}
        </Info>
      </Container>
    </Header>
    <Data>
      {result.overview ? (
        <>
          <DataName>Overview</DataName>
          <DataValue>{result.overview}</DataValue>
        </>
      ) : null}
      {loading && (
        <ActivityIndicator
          color="white"
          size="small"
          style={{ marginTop: 30 }}
        />
      )}
      {result.spoken_languages ? (
        <>
          <DataName>Languages</DataName>
          <DataValue>
            {result.spoken_languages.map(
              (l, i) =>
                `${
                  i === result.spoken_languages.length - 1
                    ? `${l.name}`
                    : `${l.name}, `
                } `
            )}
          </DataValue>
        </>
      ) : null}
      {result.release_date ? (
        <>
          <DataName>Release Date</DataName>
          <DataValue>{formatDate(result.release_date)}</DataValue>
        </>
      ): null}
      {result.status ? (
        <>
          <DataName>Status</DataName>
          <DataValue>{result.status}</DataValue>
        </>
      ): null}
      {result.runtime ? (
        <>
          <DataName>Runtime</DataName>
          <DataValue>⏰{result.runtime} minutes</DataValue>
        </>
      ): null}
      {result.first_air_date ? (
        <>
          <DataName>First Air Date</DataName>
          <DataValue>{formatDate(result.first_air_date)}</DataValue>
        </>
      ): null}
      {result.genres ? (
        <>
          <DataName>Genres</DataName>
          <DataValue>
            {result.genres.map(
              (g, i) =>
                `${
                  i === result.genres.length - 1 ? `${g.name}` : `${g.name}, `
                }`
            )}
          </DataValue>
        </>
      ): null}
      {result.number_of_episodes ? (
        <>
          <DataName>Seasons / Episodes</DataName>
          <DataValue>
            {result.number_of_seasons} / {result.number_of_episodes}
          </DataValue>
        </>
      ): null}
      {result.imdb_id ? (
        <>
          <DataName>Links</DataName>
          <Link
            onPress={() =>
              openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
            }
            text="IMDB"
            icon={"imdb"}
          />
        </>
      ): null}
      {result.videos.results?.length > 0 ? (
        <>
          <DataName>Videos</DataName>
          {result.videos.results.map(video => (
            <Link
              key={video.id}
              text={video.name}
              icon={"youtube-play"}
              onPress={() =>
                openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
              }
            />
          ))}
        </>
      ): null}
    </Data>
  </ScrollContainer>
);
