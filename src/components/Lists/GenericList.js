import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Platform, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import HorizontalButton from '../Buttons/HorizontalButton';
import OptionsMenu from "react-native-option-menu";
import icon from "../../../assets/icon.png";


const GenericList = ({list}) => {
    const {colors} = useTheme();
    const listHeaderText = {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20,
        marginTop: 30
    };
    const summaryStyle={
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 14,
        padding: 5
    };
    const cardStyle = {
        marginRight: 20,
        marginLeft: 20,
        padding:10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.background,
        borderColor: colors.background,
        flexDirection: 'row',
        justifyContent: 'space-between'
    };

    const listContainerStyle={
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: colors.card,
        borderColor: colors.card,
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 2,
    }

    const summaryContainer = {
        //borderWidth: 1,
        backgroundColor: colors.card,
        zIndex: 2,
        marginTop: -10,
        // borderColor: colors.card,
        // padding: 10,
        elevation: 15,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 6},
        shadowOpacity: .2,
        shadowRadius: 4,
    };

    const actionButtonStyle = {
        marginRight: 20, 
        marginTop: 32,
    }

    const actionButtonShadow = {
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: .5,
        shadowRadius: 4,
        elevation: 15
    }

    const calendarContainer = {
        
    }

    const optionsButton = (
        <TouchableOpacity 
            style={[actionButtonStyle, {marginRight: 2}]}
            onPress={() => console.log("listoptions")}
        >
            <MaterialCommunityIcons 
                name={"dots-horizontal-circle-outline"}
                color={colors.primary}
                size={25}
            />
        </TouchableOpacity>
    );//plus-circle-outline
    
    const editItem = () => {

    };
    const deleteItem = () => {

    };
    
    const tempComponenet = (<MaterialCommunityIcons 
        name={"dots-horizontal-circle-outline"}
        color={colors.primary}
        style={[actionButtonStyle, {marginRight: 2}]}
        size={25}
    />)

    return(
        <View style={listContainerStyle}>
            <FlatList
                scrollEnabled={false}
                keyExtractor={(item, index) => item.id + item.name}
                contentContainerStyle={{marginTop: -20}}
                ListHeaderComponent={() => {
                        return(
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={listHeaderText}>LIST_TITLE</Text>
                                <View style={{flexDirection: 'row'}}>

                                    <OptionsMenu 
                                        customButton={tempComponenet}
                                        destructiveIndex={1}
                                        options={["Edit", "Delete", "Cancel"]}
                                        actions={[editItem, deleteItem]}
                                    />
                                </View>
                            </View>
                        );
                        
                    }
                }
                ListEmptyComponent={<Text style={[summaryStyle, {fontWeight: 'normal', marginHorizontal: 15, textAlign: 'center'}]}>Tap the '+' icon to add a new list item</Text>}
                data={list}
                // refreshing={true}
                // onRefresh={() => console.log('refreshed')}
                renderItem={({item}) => 
                    <HorizontalButton 
                        item={item.name}  
                        bold={false}
                        altStyle={{backgroundColor: colors.background, borderColor: colors.background}}
                    />
                }
            />
            
        </View>
    );
};

export default GenericList;