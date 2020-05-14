import React, { useEffect, useState }  from "react";
import { View, Text } from "react-native";
import { tvApi } from "../api"

export default () => {
  const [shows, setShows] = useState({
    today:[], 
    thisWeek:[], 
    topRated:[], 
    popular:[],
    todayError: null, 
    thisWeekError: null, 
    topRatedError: null, 
    popularError: null
  });

  useEffect(()=>{
    getData()
  },[]);

const getData = async() => {
  const [today, todayError] = await tvApi.today();
  const [thisWeek, thisWeekError] = await tvApi.thisWeek();
  const [topRated, topRatedError] = await tvApi.topRated();
  const [popular, popularError] = await tvApi.popular();
  setShows({
    today,
    todayError,
    thisWeek,
    thisWeekError,
    topRated,
    topRatedError,
    popular,
    popularError
  })
}

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{shows.today?.length}</Text>
    </View>
  )
}
