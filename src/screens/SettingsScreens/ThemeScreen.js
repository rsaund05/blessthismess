import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Switch } from 'react-native';
import { useTheme } from '../../Contexts/ThemeContext';

const ThemeScreen = ({ navigation }) => {
    const {setScheme, colors, isDark} = useTheme();

    const containerStyle = {
        flex: 1,
        backgroundColor: colors.background
    };

    const toggleScheme = () => {
        isDark ? setScheme('light'): setScheme('dark');
    };

    return(
        <>
            <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"}/>
            <View style={containerStyle}>
                <Text>Select Theme</Text>
                <Switch value={isDark} onValueChange={toggleScheme}/>
            </View>
        </>
    );
    
};

export default ThemeScreen;