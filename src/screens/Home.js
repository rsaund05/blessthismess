import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Home = ({ navigation }) => {
    const {colors} = useTheme();
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: colors.backgroundColor}}>
                <Text>HomeScreen</Text>
            </View>
        </SafeAreaView>
    );
}

export default Home;