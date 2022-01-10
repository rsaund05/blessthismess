import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const buildComponentList = (components) => {
    const componentArray = [];
    components.forEach((element) => {
        if(element === "Calendar") {
            componentArray.push(<Calendar />)
        }
        else {
            componentArray.push(<Text>{element}</Text>)
        }
    });
    return componentArray;
};

const Dashboard = ({ navigaton, route }) => {
    
    return(
        <View>
            <Text>Dashboard</Text>
            <Text>ID: {route.params.dash_id}</Text>
            <Text>Name: {route.params.name}</Text>
            <Text>Components: {route.params.dash_items.join(", ")}</Text>
            <Text>COMPONENT ARRAY: </Text>
            {buildComponentList(route.params.dash_items)}
        </View>
    );
};

export default Dashboard;