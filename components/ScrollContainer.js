import React from "react"
import PropTypes from "prop-types"
import { ScrollView, ActivityIndicator } from "react-native"

const ScrollContainer = ({loading, children}) => (
    <ScrollView style={{ backgroundColor: "black" }}
        contentContainerStyle={{ flexGrow: 1, 
        justifyContent: loading ? "center" : "flex-start" }}>
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ) : (children)} 
    </ScrollView>
)

ScrollContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default ScrollContainer;