import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import Movies from "../screens/Movies";

const Tabs = createBottomTabNavigator();

const getHeaderName = route => route?.state?.routeNames[route.state.index] || "Movies"

export default ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          title: getHeaderName(route)
        });
        
    }, [route])
    
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="TV" component={Tv} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Favorites" component={Favs} />
      </Tabs.Navigator>
    );
}
