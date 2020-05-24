import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
    background-color:white;
    margin: 0 30px 50px 30px;
    padding: 5px 10px;
    border-radius: 15px;
`;

const Input = ({placeholder, value, onChange, onSubmit}) => (
    <TextInput 
        value={value} 
        placeholder={placeholder} 
        onChangeText={onChange} 
        onSubmitEditing={onSubmit}
        returnKeyType={"search"}
        autoCorrect={false}
        autoCapitalize={"none"}
    />
)

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Input;