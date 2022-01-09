import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HorizontalButton from '../components/Buttons/HorizontalButton';
import moment from 'moment';
import { AppleHeader } from "@freakycoder/react-native-header-view";
import ProgressBar from 'react-native-progress/Bar';
import HOUSEHOLD_ID from '../api/HouseHold';
import DASH_LIST from '../api/DashboardList';

var current_date = moment().format("dddd, MMMM Do YYYY, h:mm a");
var totalTasksDueToday = 5;
var calendarEventsToday = 2;
var tasksCompleted = 3;
var tasksRemaining = totalTasksDueToday - tasksCompleted;
var tasksPercentComplete = tasksCompleted / totalTasksDueToday;

var summary_data_str_1 = `Tasks Remaining Today: ${tasksRemaining}`;
var summary_data_str_2 =  `Calendar Events Today: ${calendarEventsToday}`;

const Home = ({ navigation }) => {
    const {colors} = useTheme();
    const [dateTimeUpdate, setDateTimeUpdate] = useState(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    var encouragementStr = ""
    if((tasksPercentComplete === 0) && totalTasksDueToday > 0) {
        encouragementStr = "Better get started!";
    } else if(((tasksPercentComplete > 0) && (tasksPercentComplete < 0.25)) && (totalTasksDueToday > 0)) {
        encouragementStr = "Off to a great start!"
    } else if((tasksPercentComplete >= 0.25) && (tasksPercentComplete < 0.5) && (totalTasksDueToday > 0)) {
        encouragementStr = "Over a quarter done, nice pace!";
    } else if((tasksPercentComplete === 0.5) && (totalTasksDueToday > 0)) {
        encouragementStr = "Halfway there!";
    } else if((tasksPercentComplete >= 0.5) && (tasksPercentComplete < 0.75) && (totalTasksDueToday > 0)) {
        encouragementStr = "Over halfway there, keep it up!";
    } else if((tasksPercentComplete >= 0.75) && (tasksPercentComplete < 1) && (totalTasksDueToday > 0)) {
        encouragementStr = "So close to being done!";
    } else if((tasksPercentComplete === 1) && (totalTasksDueToday > 0)) {
        encouragementStr = "All tasks done for today, nice!";
    }else {
        encouragementStr="No tasks due today";
    }
    // switch(tasksPercentComplete) {
    //     case (0) && (tasksDueToday > 0):
    //         encouragementStr = "Better get started!";
    //         break;
    //     case ((tasksPercentComplete >= 0.25) && (tasksPercentComplete < 0.5)) && (tasksDueToday > 0):
    //         encouragementStr = "Off to a great start!";
    //         break;
    //     case (tasksPercentComplete === 0.5) && (tasksDueToday > 0):
    //         encouragementStr = "Halfway there!";
    //         break;
    //     case ((tasksPercentComplete >= 0.5) && (tasksPercentComplete < 0.75)) && (tasksDueToday > 0):
    //         encouragementStr = "Over halfway there, keep it up!";
    //         break;
    //     case ((tasksPercentComplete >= 0.75) && (tasksPercentComplete < 1) && (tasksDueToday > 0)):
    //         encouragementStr = "So close to being done!";
    //         break;
    //     case (tasksPercentComplete === 1) && (tasksDueToday > 0):
    //         encouragementStr = "All tasks done for today, nice!";
    //         break;
    //     default:
    //         encouragementStr = "No tasks due today";
    // };
    const listHeaderText = {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20,
        marginTop: 30
    };
    const dateStrStyle = {
        color: colors.text,
        fontSize: 12,
        marginLeft: 25,
    }
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
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTimeUpdate(moment().format("dddd, MMMM Do YYYY, h:mm a"))
        })
    });
    return(
        <View style={{flex: 1, flexDirection: 'column'}}>
            <ScrollView indicatorStyle='black' showsVerticalScrollIndicator={true}>
                <Text style={listHeaderText}>Your Summary</Text>
                <Text style={dateStrStyle}>for {dateTimeUpdate}</Text>
                <View style={[cardStyle, {marginTop: 20, flexWrap: 'wrap'}]}>
                    <Text style={summaryStyle}>{summary_data_str_1}</Text>
                    <Text style={summaryStyle}>{summary_data_str_2}</Text>
                </View>
                <View style={[cardStyle, {marginTop: 10, flexDirection: 'column'}]}>
                    <Text style={[summaryStyle, {marginBottom: 5}]}>Today's Task Completion Progress: %{tasksPercentComplete*100}</Text>
                    <ProgressBar width={null} progress={tasksPercentComplete}color={colors.primary}/>
                    <Text style={[summaryStyle, {fontWeight: "normal", fontStyle: "italic"}]}>{encouragementStr}</Text>
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
                    data={DASH_LIST}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => <HorizontalButton item={item.name} subItem={item.dash_items.join(", ")} bold={true} icon={"bulletin-board"} iconSize={35} onPress={() => console.log("pressed")}/>}
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