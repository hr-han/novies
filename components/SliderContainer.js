import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import Title from "./Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View``;

const SwiperContainer = styled.View`
    width:100%;
    height:${HEIGHT / 4}px;
    margin-bottom: 50px;
`;
const TitleContainer = styled.View`
    margin-bottom:20px;
`;

const SliderContainer = ({title, children}) => (
    <Container>
        {title ? (
            <TitleContainer>
                <Title title={title} />
            </TitleContainer>) 
            : null
        }
        <SwiperContainer>
            <Swiper controlsEnabled={false} loop timeout={3}>
                {children}
            </Swiper>
        </SwiperContainer>
    </Container>
)

SliderContainer.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
}

export default SliderContainer;