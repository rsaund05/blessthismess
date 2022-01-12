import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import GenericList from '../components/Lists/GenericList';

const TEMP_LIST_1 = [{id: 1, name: "reminder1"}, {id: 2, name: "reminder2"}, {id: 3, name: "reminder3"}];

const buildComponentList = (components) => {
    const [list, setList] = useState([]);
    const listStyle = {
        flexDirection: 'column',
        padding: 5,
        marginHorizontal: 10,
        marginVertical: 20
    }

    const componentArray = [];
    components.forEach((element) => {
        switch(element) {
            case "Calendar":
                componentArray.push(<Calendar />);
                break;
            case "Task List":
            case "Reminder List":
            case "List":
                componentArray.push(<GenericList list={TEMP_LIST_1}/>);
            break;
            default:
        }; 
        
    });
    return componentArray;
};

const Dashboard = ({ navigaton, route }) => {
    const {colors} = useTheme();
    return(
        <ScrollView persistentScrollbar={true} style={{flex: 1}}>
            <Text>ID: {route.params.dash_id}</Text>
            <Text>Name: {route.params.name}</Text>
            {buildComponentList(route.params.dash_items)}
            {/* <GenericList list={TEMP_LIST_1}/> */}
        </ScrollView>
    );
};

export default Dashboard;