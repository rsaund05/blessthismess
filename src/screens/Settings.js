import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native';
import { Button } from 'react-native-elements';

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
        <View style={styles.listItemContainer}>
            <Text style={styles.listItemText}>{item}</Text>
        </View>
    );
};

const ListHeader = ({ item }) => {
    return(
        <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeaderText}>{item.title}</Text>
        </View>
    );
};

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
    listItemContainer: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 10,
        borderRadius: 5,
    },
    listItemText: {
        color: 'black'
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