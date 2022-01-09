import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
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

var DASH_ID_LIST = [{id: "12345678", name: "Kids", dash_items: ["Tasks", "Calendar","Reminders"]}, {id: "87654321", name: "Groceries & Coupons", dash_items: ["List", "Images", "Reminders"]}, {id: "11223344", name: "Mom's Work Schedule", dash_items: ["Calendar", "Reminders"]}, {id: "55667788", name: "Dad's Work Schedule", dash_items: ["Calendar", "Reminders"]}];


const Home = ({ navigation }) => {
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
        <View style={{flex: 1, flexDirection: 'column'}}>
            <ScrollView indicatorStyle='black' showsVerticalScrollIndicator={true}>
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
                
                <FlatList
                    scrollEnabled={false}
                    contentContainerStyle={{padding: 5}}
                    ListHeaderComponent={() => <Text style={listHeaderText}>Your Dashboards</Text>}
                    data={DASH_ID_LIST}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => <HorizontalButton item={item.name} subItem={item.dash_items.join(", ")} icon={"bulletin-board"} iconSize={35} onPress={() => console.log("pressed")}/>}
                />
                
            </ScrollView>
        </View>
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