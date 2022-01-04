import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Account = ({ navigation }) => {
    const {colors} = useTheme();
    return(
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text style={{color: colors.text}}>AccountScreen</Text>
            </View>
        </SafeAreaView>
    );
}

export default Account;