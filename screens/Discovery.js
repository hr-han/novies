import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null
  })

  useEffect(()=>{
    getData()
  },[])

  const getData = async() => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error
    })
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{movies.results ?.length}</Text>
    </View>
  )
};
