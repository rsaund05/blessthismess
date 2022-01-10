import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HorizontalButton from '../components/Buttons/HorizontalButton';
import moment from 'moment';
import ProgressBar from 'react-native-progress/Bar';
import HOUSEHOLD_ID from '../api/HouseHold';
import DASH_LIST from '../api/DashboardList';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddDashModal from '../components/Modals/AddDashModal';

var current_date = moment().format("dddd, MMMM Do YYYY, h:mm a");
var totalTasksDueToday = 5;
var calendarEventsToday = 2;
var tasksCompleted = 1;
var tasksRemaining = totalTasksDueToday - tasksCompleted;
var tasksPercentComplete = tasksCompleted / totalTasksDueToday;

var summary_data_str_1 = `Tasks Remaining Today: ${tasksRemaining}`;
var summary_data_str_2 =  `Calendar Events Today: ${calendarEventsToday}`;

const Home = ({ navigation }) => {
    const {colors} = useTheme();
    const [dateTimeUpdate, setDateTimeUpdate] = useState(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    const [modalVisible, setModalVisible] = useState(false);
    
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
    };
    const summaryStyle={
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 14,
        padding: 5
    };
    const cardStyle = {
        marginRight: 20,
        marginLeft: 20,
        padding:10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.background,
        borderColor: colors.background,
        flexDirection: 'row',
        justifyContent: 'space-between'
    };

    const summaryContainer = {
        //borderWidth: 1,
        backgroundColor: colors.card,
        zIndex: 2,
        marginTop: -10,
        // borderColor: colors.card,
        // padding: 10,
        elevation: 15,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 6},
        shadowOpacity: .2,
        shadowRadius: 4,
    };

    //Set encouragement string based on percentage of tasks complete
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

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTimeUpdate(moment().format("dddd, MMMM Do YYYY, h:mm a"))
        })
    });

    return(
        <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
            <AddDashModal visible={modalVisible} setVisible={setModalVisible} />
            <View style={summaryContainer}>
                <Text style={listHeaderText}>Your Summary</Text>
                <Text style={dateStrStyle}>for {dateTimeUpdate}</Text>
                <View style={[cardStyle, {marginTop: 10, flexWrap: 'wrap'}]}>
                    <Text style={summaryStyle}>{summary_data_str_1}</Text>
                    <Text style={summaryStyle}>{summary_data_str_2}</Text>
                </View>
                <View style={[cardStyle, { marginTop: 10, marginBottom: 10, flexDirection: 'column'}]}>
                    <Text style={[summaryStyle, {marginBottom: 5}]}>Today's Task Completion Progress: {tasksPercentComplete*100}%</Text>
                    <ProgressBar width={null} progress={tasksPercentComplete}color={colors.primary}/>
                    <Text style={[summaryStyle, {fontWeight: "normal", fontStyle: "italic"}]}>{encouragementStr}</Text>
                </View>
            </View>
            
                
            <FlatList
                scrollEnabled={true}
                contentContainerStyle={{padding: 5}}
                ListHeaderComponent={() => {
                        return(
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={listHeaderText}>Your Dashboards</Text>
                                <TouchableOpacity 
                                    style={{marginRight: 20, marginTop: 32}}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <MaterialCommunityIcons 
                                        name={"plus-circle-outline"}
                                        color={colors.primary}
                                        size={25}
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                        
                    }
                }
                ListEmptyComponent={<Text style={[summaryStyle, {fontWeight: 'normal', marginHorizontal: 15, textAlign: 'center'}]}>You haven't created a dashboard yet. Tap the '+' icon above to begin.</Text>}
                data={DASH_LIST}
                // refreshing={true}
                // onRefresh={() => console.log('refreshed')}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => 
                    <HorizontalButton 
                        item={item.name} 
                        subItem={item.dash_items.join(", ")} 
                        bold={true} icon={"bulletin-board"} 
                        iconSize={35} 
                        onPress={() => navigation.navigate('Dashboard', {title: item.name, dash_id: item.id, name: item.name, dash_items: item.dash_items})}
                    />
                }
            />
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