import React from "react"
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types"
import { apiImage } from "../api";
import Poster from "../components/Poster";
import Votes from "./Votes"
import { trimText } from "../utils"

const Container = styled.View`
    align-items:center;
    margin-right:20px;
`;

const Title = styled.Text`
    color:white;
    font-weight:500;
    margin:10px 0 5px 0;
`;


const Vertical = ({ id, posterPath, title, votes}) => (
    <TouchableOpacity>
        <Container>
            <Poster url={posterPath}/>
            <Title>{trimText(title, 10)}</Title>
            <Votes votes={votes}/>
        </Container>
    </TouchableOpacity>
)

Vertical.propTypes = {
    posterPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
}

export default Vertical;