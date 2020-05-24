import React from "react"
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
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


const Vertical = ({ id, posterPath, title, votes}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", { id, title, votes, posterPath });
    }
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={posterPath} />
                <Title>{trimText(title, 10)}</Title>
                {votes > 0 && (<Votes votes={votes} />)}
            </Container>
        </TouchableOpacity>
    )
}

Vertical.propTypes = {
    posterPath: PropTypes.string,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
};

export default Vertical;