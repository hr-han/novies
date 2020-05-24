import React from "react";
import styled from "styled-components/native"
import Title from "./Title";
import PropTypes from "prop-types"

const Container = styled.View`
  margin-top:20px;
`;

const List = ({title, children}) => (
    <>
        <Title title={title} />
        <Container>{children}</Container>
    </>
)

List.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default List;