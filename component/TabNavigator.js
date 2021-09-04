import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tab';

export const AppTabNavigator = createBottomTabNavigator ({
    DayOrder:{
        screen:DayScreen,
        navigationOptions:{
            tabBarLabel: "Day Order"
        }
    },
    WeeklyOrder:{
        screen:WeekScreen,
        navigationOptions:{
            tabBarLabel: "Weekly Order"
        }
    },
})

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2a2a2a",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});