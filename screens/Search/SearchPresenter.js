import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
    <ScrollContainer contentContainerStyle={{paddingTop:10}} loading={false} refreshFn={onSubmit}>
        <Input 
            placeholder={"write a keyword"} 
            value={keyword}
            onChange={onChange} 
            onSubmit={onSubmit}
        />
        {movies.length !== 0 && (
            <HorizontalSlider title={"Movie Result"}>
                {movies.map(movie => (
                    <Vertical key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                        votes={movie.vote_average}
                    />
                ))}
            </HorizontalSlider>
        )}
        {shows.length !== 0 && (
            <HorizontalSlider title={"TV Result"}>
                {shows.map((show) => (
                    <Vertical key={show.id}
                        id={show.id}
                        title={show.name}
                        posterPath={show.poster_path}
                        votes={show.vote_average}
                        isTv={true}
                        />
                ))}
            </HorizontalSlider>
        )}
    </ScrollContainer>
    
)