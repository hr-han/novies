import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Dimensions, Image } from "react-native";
import { getImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
    width:${WIDTH};
    height:${HEIGHT/4}px;
    background-color:red;
`;

const Bg = styled.Image`
    width: 100%;
    height: 100%;
`;

const Slide = ({ id, title, backgroudImage, votes, overview }) => (
  <Container>
    <Bg source={{ uri: getImage(backgroudImage) }}
    />
  </Container>
);

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroudImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
}

export default Slide;