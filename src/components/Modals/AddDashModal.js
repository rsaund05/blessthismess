import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform, Modal, Button, } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HorizontalButton from '../Buttons/HorizontalButton';

const AddDashModal = ({visible, setVisible}) => {
    const {colors} = useTheme();
    const inputStyle = {
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: colors.card,
        borderColor: colors.card,
        padding: 10,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 2,
    };
    const promptStyle = {
        color: colors.text,
        fontSize: 15,
        marginHorizontal: 20,
        marginVertical: 5
    };
    const listHeaderText = {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20,
        marginTop: 30
    };
    const titleStyle = {
        color: colors.text,
        fontSize: 18,
        alignItems: 'center',
        fontWeight: 'bold',
        padding: 15,
        marginVertical: -36
    };

    return(
        <Modal 
            presentationStyle='pageSheet'
            animationType='slide'
            visible={visible}
            
            onRequestClose={() => {
                setVisible(!visible);
            }}
        >
            <View style={{flexDirection: 'row', backgroundColor: colors.background}}>
                <TouchableOpacity 
                    style={{
                        marginLeft: 20,
                        marginTop: 20,
                    }}
                    onPress={() => setVisible(!visible)}
                >
                    <Text style={{ color: colors.primary, textAlign: 'center', fontSize: 18}}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: colors.background}}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={titleStyle}>Add Dashboard</Text>
                </View>
                <View style={{marginVertical: 20}}>
                    <Text style={promptStyle}>Dashboards contain all of the things you need to track and organize your household.</Text>
                    <Text style={promptStyle}>You can make multiple dashboards for different purposes, such as trakcing groceries and coupons, or specific schedules.</Text>
                    <Text style={promptStyle}>Dashboards can contain as many components that you need, such as calendars, reminder lists, images, etc.</Text>
                </View>
                <Text style={listHeaderText}>Dashboard Name</Text>
                <TextInput 
                    placeholder='Enter Dashboard Name'
                    style={inputStyle}
                />
                <HorizontalButton item={"Add Dashboard Component"} icon={"plus-circle-outline"} iconSize={20}/>
                <TouchableOpacity
                    style={{alignItems: 'center', marginTop: 20}}
                    onPress={() => {}}
                >
                    <Text style={{color: colors.primary, fontSize: 17}}>Create</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default AddDashModal;