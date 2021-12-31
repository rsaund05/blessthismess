import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Horizontally stretched button with drop shadow, optional MaterialCommunityIcon component can be passed in 
const HorizontalButton = ({item, icon}) => {
    return(
        <View>
            <TouchableOpacity>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>{item}</Text>
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

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        padding: 10,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    textStyle: {
        color: 'black',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 2
    },
});

export default HorizontalButton;