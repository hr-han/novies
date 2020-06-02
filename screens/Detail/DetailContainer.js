import React, { useState, useLayoutEffect, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import DetailPresenter from "./DetailPresenter";
import { getProvidesAudioData } from "expo/build/AR";
import { movieApi, tvApi } from "../../api";

export default ({
    navigation,
    route: {
        params: {
            id, title, backgroundImage, posterPath, votes, overview, isTv
        }
    }
}) => {
    const [detail, setDetail] = useState({
        loading: true,
        result:{
            id,
            title,
            backgroundImage,
            posterPath,
            votes,
            overview,
            videos:{
                result: []
            }
        }
    });
    
    const getData = async() => {
        const [getDetail, getDetailError] = isTv ? await tvApi.show(id) : await movieApi.movie(id);
            setDetail({
                result: {
                    ...getDetail,
                    title: getDetail.title || getDetail.name,
                    backgroundImage: getDetail.backdrop_path,
                    posterPath: getDetail.poster_path,
                    votes: getDetail.vote_average,
                    overview: getDetail.overview
                },
                loading:false
            });

    }
    // 화면이 바뀌기 전에 발생 - 리사이징, 리레이아웃 (useEffect는 화면이 바뀌고 나서 발생)
    useLayoutEffect(()=>{
        navigation.setOptions({ title });
    });
    // id가 바뀔때마다 실행
    useEffect(()=>{
        getData();
    },[id])

    const openBrowser = async(url) => {
        await WebBrowser.openBrowserAsync(url);
    }
    
    return <DetailPresenter openBrowser={openBrowser} {...detail} />;
} 