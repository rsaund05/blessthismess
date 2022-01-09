import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform, Modal, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';

const SignInModal = ({visible, setVisible}) => {
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
    return(
        <Modal 
            presentationStyle='pageSheet'
            animationType='slide'
            visible={visible}
            
            onRequestClose={() => {
                setVisible(!visible);
            }}
        >
            <View style={{flex: .07, flexDirection: 'row',}}>
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
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: colors.background}}>
                <TextInput 
                    placeholder='Email'
                    style={inputStyle}
                />
                <TextInput 
                    placeholder='Password'
                    style={inputStyle}
                />
                <TouchableOpacity
                    style={{alignItems: 'center', marginTop: 20}}
                    onPress={() => {}}
                >
                    <Text style={{color: colors.primary, fontSize: 17}}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default SignInModal;