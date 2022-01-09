import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity, Platform } from 'react-native';
import HorizontalButton from '../../components/Buttons/HorizontalButton';
import { useTheme } from '@react-navigation/native';

const listHeaderContainer = {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
}
const listHeaderText = {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
}

const settingsListData = [
    {
        title: "Appearance",
        data: ['Theme', 'Color', 'Font Size']
    },
    {
        title: "About",
        data: ["Developer", "Contact"]
    }
];

//----------------------------------------------------------------------------------------------------------------------------------
const Settings = ({ navigation }) => {
    const {colors} = useTheme();
    const listHeaderContainer = {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
    };
    const listHeaderText = {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 18,
    };
    return(
        <SafeAreaView style={styles.container}>
            <SectionList
                style={styles.list}
                scrollEnabled={false}
                sections={settingsListData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <HorizontalButton item={item} icon="chevron-right" iconSize={20} onPress={() => navigation.navigate(item)}/>}
                renderSectionHeader={({section}) => 
                    <View style={listHeaderContainer}>
                        <Text style={listHeaderText}>{section.title}</Text>
                    </View>
                }
            />
            
        </SafeAreaView>
    );
}
//----------------------------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    list: {
        width: '100%',
        
    }
});

export default Settings;