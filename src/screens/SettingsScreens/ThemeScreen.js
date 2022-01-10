import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ThemeScreen = ({ navigation }) => {
    const {colors, isDark} = useTheme();

    const containerStyle = {
        flex: 1,
        backgroundColor: colors.background
    };

    return(
        <>
            <StatusBar animated />
            <View style={containerStyle}>
                <Text>Select Theme</Text>
                <Switch />
            </View>
        </>
    );
    
};

export default ThemeScreen;