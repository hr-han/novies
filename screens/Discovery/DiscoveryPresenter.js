import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions, PanResponder, Animated } from "react-native";
import { apiImage } from "../../api";
import { firebrick } from "color-name";
 
const { width:WIDTH, height:HEIGHT } = Dimensions.get("window");

const Container = styled.View`
    flex: 1;
    background-color: black;
    align-items: center;
`;

const cardStyles = {
    top: 50,
    height: HEIGHT / 1.5,
    width: "80%",
    position: "absolute"
}

const Poster = styled.Image`
    width:100%;
    height:100%;
    border-radius:20px;
`;

export default ({results}) => {
    // 최상위 카드 state
    const [topIndex, setTopIndex] = useState(0);
    const nextCard = () => setTopIndex(currentValue => {
        if (currentValue === results.length - 1) {
            return 0
        }
        return currentValue + 1
    });
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        // 드래그 했을 때
        onPanResponderMove: (event, { dx, dy }) => {
            // 드래그 start ~ end 의 거리를 애니메이션 position에 set 해준다.
            // position.getTranslateTransform()로 transform css 를 얻을 수 있음.
            position.setValue({ x: dx, y: dy });
        },
        // 눌렀다 뗏을떄
        onPanResponderRelease: (event, {dx, dy}) =>{
            // 범위 밖으로 드래그 시
            // 카드를 왼쪽으로 버림
            if (dx <= -WIDTH / 2) {
                Animated.spring(position, {
                    toValue: { x: -WIDTH, y: dy}
                }).start(nextCard);//랜더 후 콜백함수 설정 가능.
            }
            // 오른쪽으로 버림
            else if ( dx >= WIDTH / 2) {
                Animated.spring(position, {
                    toValue: { x: WIDTH, y: dy }
                }).start(nextCard);//랜더 후 콜백함수 설정 가능.
            }
            // 범위밖이 아닐 경우 센터로
            else {
                // 천천히 설정값으로 바꾼다. 움직히는 것 처럼 보임.
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    //bounciness: 30, // 통통 튀어오르는 효과
                    //friction:1 // 마찰
                }).start(); // 시작한다는 뜻. 랜더 후 콜백함수 설정 가능.
            }
        }
    });
    // position.x가 inputRange이면 outputRange값을 반환. (비례값인듯)
    // 주의) 음수에서 양수로 가도록 설정, input/output 개수 같아야함.
    const rotateValues = position.x.interpolate({
        inputRange: [-WIDTH/2, 0, WIDTH/2],
        outputRange: [`-8deg`, `0deg`, `8deg`], 
        extrapolate:"clamp" // 최대값 outputRange로 고정
    });

    const secondCardOpacity = position.x.interpolate({
        inputRange: [-WIDTH / 2, 0, WIDTH / 2],
        outputRange: [1, 0.2, 1],
        extrapolate: "clamp" // 최대값 outputRange로 고정
    });

    const secondCardScale = position.x.interpolate({
        inputRange: [-WIDTH / 2, 0, WIDTH / 2],
        outputRange: [1, 0.8, 1],
        extrapolate: "clamp" // 최대값 outputRange로 고정
    })

    return (
        <Container>
            {results.map((movie, index) => {
                // 첫번째 카드
                if (index === topIndex) {
                    return (
                        <Animated.View
                            style={{
                                ...cardStyles,
                                zIndex:1,
                                transform: [{ rotate: rotateValues}, 
                                ...position.getTranslateTransform()]
                            }}
                            key={movie.id} {...panResponder.panHandlers}>
                            <Poster source={{ uri: apiImage(movie.poster_path) }} />
                        </Animated.View>
                    )
                }
                // 두번째 카드
                else if (index === topIndex + 1) {
                    return (
                        <Animated.View
                            style={{
                                ...cardStyles,
                                zIndex: -index,
                                opacity: secondCardOpacity,
                                transform: [{ scale: secondCardScale}]
                            }}
                            key={movie.id} {...panResponder.panHandlers}>
                            <Poster source={{ uri: apiImage(movie.poster_path) }} />
                        </Animated.View>
                    )
                }
                // 나머지 카드
                else {
                    return null
                    // return (
                    //     <Animated.View
                    //         style={{
                    //             ...cardStyles,
                    //             zIndex: -index,
                    //             opacity: 0,
                    //         }}
                    //         key={movie.id} {...panResponder.panHandlers}>
                    //         <Poster source={{ uri: apiImage(movie.poster_path) }} />
                    //     </Animated.View>
                    // )
                }

            })}
        </Container>
    )
}