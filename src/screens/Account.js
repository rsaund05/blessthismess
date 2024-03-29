import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform, Modal } from 'react-native';
import { useTheme } from '@react-navigation/native';
import SignInModal from '../components/Modals/SignInModal';

const Account = ({ navigation }) => {
    const {colors} = useTheme();
    const [modalVisible, setModalVisible] = useState(false);

    const promptStyle = {
        color: colors.text,
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 15,
        marginTop: 30
    };
    const containerStyle = {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    };
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
        <SafeAreaView style={containerStyle}>
            <SignInModal visible={modalVisible} setVisible={setModalVisible}/>
            <View>
                <Text style={promptStyle}>Create an account to save and back up your schedules, lists, and notes online and share them with other <Text style={{fontWeight: 'bold'}}>blessthismess</Text> users.</Text>
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
                    <Text style={{color: colors.primary, fontSize: 17}}>Create Account</Text>
                </TouchableOpacity>
                {(Platform.OS === 'ios') && 
                    <Text style={{color: colors.text, textAlign: 'center'}}>{"\n"}If you already have an account,
                    <TouchableOpacity 
                        style={{
                            marginTop: -3
                        }}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={{color: colors.primary, textAlign: 'center'}}> sign in here</Text>
                    </TouchableOpacity>
                    </Text>
                } 
                {(Platform.OS === 'android') &&
                    <Text style={{color: colors.text, textAlign: 'center'}}>{"\n"}If you already have an account,{"\n"}
                    <TouchableOpacity style={{
                        
                    }}>
                        <Text style={{color: colors.primary, textAlign: 'center'}}>sign in here</Text>
                    </TouchableOpacity>
                    </Text>
                }
            </View>
        </SafeAreaView>
    );
}

export default Account;