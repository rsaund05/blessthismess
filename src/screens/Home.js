import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HorizontalButton from '../components/Buttons/HorizontalButton';
import moment from 'moment';
import { AppleHeader } from "@freakycoder/react-native-header-view";
import ProgressBar from 'react-native-progress/Bar';

var current_date = moment().format('MMMM Do YYYY');
var temp_1 = 1;
var temp_2 = 5;
var temp_3 = 0.4;

var summary_data_str_1 = `Items Due: ${temp_1}`;
var summary_data_str_2 =  `Calendar Events: ${5}`;

var DASH_ID_LIST = ["12345678", "87654321", "11223344", "55667788"];


const Home = ({ navigation }) => {
    const {colors} = useTheme();
    
    const promptStyle = {
        color: colors.text,
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 15
    };
    const listHeaderContainer = {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
    };
    const listHeaderText = {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 30
    };
    const summaryStyle={
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 14,
        
    }
    const cardStyle = {
        marginRight: 20,
        marginLeft: 20,
        padding:10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.card,
        borderColor: colors.card,
        backgroundColor: colors.card,
        borderColor: colors.card,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    return(
        <SafeAreaView >
            <AppleHeader
                dateTitle={current_date} 
                largeTitle="Your Summary"
                largeTitleFontColor={colors.text}
            />
            <View style={[cardStyle, {marginTop: 20}]}>
                <Text style={summaryStyle}>{summary_data_str_1}</Text>
                <Text style={summaryStyle}>{summary_data_str_2}</Text>
                
            </View>
            <View style={[cardStyle, {marginTop: 10, flexDirection: 'column'}]}>
                
                <Text style={[summaryStyle, {marginBottom: 5}]}>Daily Task Completion Progress: %{temp_3*100}</Text>
                <ProgressBar width={null}progress={temp_3}color={colors.primary}/>
            </View>
            {/* <SectionList
                style={styles.list}
                scrollEnabled={false}
                sections={DASH_LIST}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <HorizontalButton item={item} icon={"bulletin-board"} iconSize={35} onPress={() => navigation.navigate(item)}/>}
                renderSectionHeader={({section}) => 
                    <View style={listHeaderContainer}>
                        <Text style={listHeaderText}>{section.title}</Text>
                    </View>
                }
            /> */}
            <View >
            <FlatList
                ListHeaderComponent={() => <Text style={listHeaderText}>Your Dashboards</Text>}
                data={DASH_ID_LIST}
                keyExtractor={(item, index) => item}
                renderItem={({item}) => <HorizontalButton item={item} icon={"bulletin-board"} iconSize={35} onPress={() => console.log("pressed")}/>}
            />
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    list: {
        width: '100%',
        
    }
});

export default Home;