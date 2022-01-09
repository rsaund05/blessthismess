import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform, Modal, Button } from 'react-native';
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
        fontSize: 17,
        marginHorizontal: 15
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
                        paddingLeft: 15,
                        paddingTop: 15,
                    }}
                    onPress={() => setVisible(!visible)}
                >
                    <Text style={{ color: colors.primary, textAlign: 'center', fontSize: 18}}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: colors.background}}>
                <Text style={[promptStyle, {marginTop: 20}]}>Dashboard Name</Text>
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