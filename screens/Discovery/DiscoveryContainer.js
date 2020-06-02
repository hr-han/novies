import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { movieApi } from "../../api";
import DiscoveryPresenter from "./DiscoveryPresenter";

export default () => {

    const [movies, setMovies] = useState({
        results: [],
        error: null
    })

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const [results, error] = await movieApi.discover();
        setMovies({
            results,
            error
        })
    }

    return <DiscoveryPresenter {...movies}/>;
};
