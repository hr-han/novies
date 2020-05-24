import React from "react";
import { ScrollView, View } from "react-native";
import Title from "./Title";
import PropTypes from "prop-types";

const HorizontalSlider = ({title, children}) => (
    <View>
        <Title title={title} />
        <ScrollView contentContainerStyle={{ marginTop: 20, marginBottom: 40, paddingLeft: 30 }} horizontal showsHorizontalScrollIndicator={false}>
        {children}
        </ScrollView>
    </View>
)

HorizontalSlider.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default HorizontalSlider;