import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

//Horizontally stretched button with drop shadow, optional MaterialCommunityIcon name can be passed in for additional component
const HorizontalButton = ({item, icon, onPress}) => {
    const {colors} = useTheme();
    const containerStyle = {
        flex: 1,
        flexDirection: 'row',
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
        elevation: 5,
    }
    const textStyle = {
        color: colors.text,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 2,
    }
    return(
        <View>
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={containerStyle}>
                    <Text style={textStyle}>{item}</Text>
                    {icon && 
                        <MaterialCommunityIcons 
                            name={icon}
                            color="black"
                            size={20}
                            style={{flexDirection: 'row-reverse'}}
                        />
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
};

// const styles = StyleSheet.create({
//     containerStyle: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginRight: 20,
//         marginLeft: 20,
//         marginTop: 10,
//         borderWidth: 1,
//         backgroundColor: colors.card,
//         borderColor: colors.card,
//         padding: 10,
//         borderRadius: 5,
//         shadowColor: 'black',
//         shadowOffset: {width: -2, height: 4},
//         shadowOpacity: 0.05,
//         shadowRadius: 2,
//     },
//     textStyle: {
//         color: colors.text,
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         paddingTop: 2
//     },
// });

export default HorizontalButton;