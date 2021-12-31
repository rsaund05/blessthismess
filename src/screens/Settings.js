import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalButton from '../components/HorizontalButton';

const settingsListData = [
    {
        title: "Appearance",
        data: ['Theme', 'Color', 'Font Size']
    },
    {
        title: "About",
        data: ["Developer", "Contact Us"]
    }
];

const ListItem = ({ item }) => {
    return(
        <HorizontalButton 
            item={item}
            icon="chevron-right"
        />
    );
};

const ListHeader = ({ item }) => {
    return(
        <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeaderText}>{item.title}</Text>
        </View>
    );
};


//----------------------------------------------------------------------------------------------------------------------------------
const Settings = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
            <SectionList
                style={styles.list}
                scrollEnabled={false}
                sections={settingsListData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <ListItem item={item} />}
                renderSectionHeader={({section}) => <ListHeader item={section} />}
            />
        </SafeAreaView>
    );
}
//----------------------------------------------------------------------------------------------------------------------------------

//chevron-right
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    list: {
        width: '100%',
        
    },
    listHeaderContainer: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 5,
    },
    listHeaderText: {
        color: 'black',
        fontWeight: 'bold'
    },
});

export default Settings;