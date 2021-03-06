import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
import PropTypes from "prop-types";
import Poster from "../components/Poster";
import Votes from "./Votes"
import { apiImage } from "../api";
import { trimText, formatDate } from "../utils"

const Container = styled.View`
    padding:0 30px;
    margin-bottom:30px;
    flex-direction:row;
    align-items:flex-start;
`;

const Data = styled.View`
    align-items:flex-start;
    width:60%;
    margin-left:25px;
`;

const Title = styled.Text`
    color:white;
    font-weight:bold;
    margin-bottom:7px;
`;

const Overview = styled.Text`
    color:white;
    margin-top:10px;
`;

const ReleaseDate = styled.Text`
    color:white;
    font-size:12px;
`;


const Horizontal = ({ id, posterPath, title, overview, releaseDate, isTv = false}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", { id, title, overview, posterPath, releaseDate, isTv });
    }

    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={posterPath} />
                <Data>
                    <Title>{trimText(title, 30)}</Title>
                    {releaseDate ? (<ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>) : null}
                    <Overview>{trimText(overview, 130)}</Overview>
                </Data>
            </Container>
        </TouchableOpacity>
    )
}

Horizontal.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.string
}

export default Horizontal;