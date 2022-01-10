import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dashboard = ({ navigaton, route }) => {
    return(
        <View>
            <Text>Dashboard</Text>
            <Text>ID: {route.params.dash_id}</Text>
            <Text>Name: {route.params.name}</Text>
        </View>
    );
};

export default Dashboard;