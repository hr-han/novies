import React from "react"
import { View, Text } from "react-native"
import ScrollContainer from "../../components/ScrollContainer";


export default ({ loading, today}) => (
    <ScrollContainer loading={loading}>
        <View>{today.map(todayOn => <Text style={{color:"white"}}>{todayOn.name}</Text>)}</View>
    </ScrollContainer>
)
