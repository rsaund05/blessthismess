import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

//Horizontally stretched button with drop shadow, optional MaterialCommunityIcon name can be passed in for additional component
const HorizontalButton = ({item, subItem, icon, iconSize, bold, altStyle, onPress}) => {
    const {colors} = useTheme();
    const containerStyle = {
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
        backgroundColor: colors.card,
        borderColor: colors.card,
        padding: 10,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 2,
        
        ...Platform.select({
            android: {
                marginBottom: 20,
                elevation: 5,
            },
            ios: {
                marginTop: 10,
            }
        }),
    };
    const textStyle = {
        color: colors.text,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 2,
        fontSize: 16,
    };
    const actionButtonStyle = {
        flexDirection: 'row-reverse',
    };
    
    return(
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={[containerStyle, altStyle]}>
                    <View>
                        <Text style={[textStyle, {fontWeight: bold ? 'bold' : "normal"}]}>{item}</Text>
                        {subItem && 
                            <View style={{height: 1, width: 'auto', backgroundColor: colors.text}}></View>
                        }
                        {subItem && 
                            <Text style={[textStyle, {fontSize: 11}]}>{subItem}</Text>
                        }
                    </View>
                    {icon && 
                        <MaterialCommunityIcons 
                            name={icon}
                            color={colors.primary}
                            size={iconSize}
                            
                            style={[actionButtonStyle]}
                        />
                    }
                </View>
            </TouchableOpacity>
    );
};

export default HorizontalButton;