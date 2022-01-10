import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions, TabActions, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import Dashboard from './src/screens/Dashboard';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Settings from './src/screens/SettingsScreens/Settings';
import Account from './src/screens/Account';
import ThemeScreen from './src/screens/SettingsScreens/ThemeScreen';
import ColorScreen from './src/screens/SettingsScreens/ColorScreen';
import FontScreen from './src/screens/SettingsScreens/FontScreen';
import AboutScreen from './src/screens/SettingsScreens/AboutScreen';
import ContactScreen from './src/screens/SettingsScreens/ContactScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HOUSEHOLD_ID from './src/api/HouseHold';
import DASH_LIST from './src/api/DashboardList';

//dimgray
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				
			}}
		>
			<HomeStack.Screen
				name="Home"
				component={Home}
				options={{ 
					title: HOUSEHOLD_ID.label
				}}
			/>
			<HomeStack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{  

				}}
			/>
		</HomeStack.Navigator>
	);
  }
  
  const SettingsStackScreen = () => {
	return (
		<SettingsStack.Navigator
			initialRouteName="Settings"
			screenOptions={{
				
			}}
		>
			<SettingsStack.Screen
				name="Settings"
				component={Settings}
				options={{cardStyle: { backgroundColor: "transparent" }}}
			/>
			<SettingsStack.Screen
				name="Theme"
				component={ThemeScreen}
				options={{cardStyle: { backgroundColor: "transparent" }}}
			/>
			<SettingsStack.Screen
				name="Color"
				component={ColorScreen}
				options={{cardStyle: { backgroundColor: "transparent" }}}
			/>
			<SettingsStack.Screen
				name="Font Size"
				component={FontScreen}
				options={{cardStyle: { backgroundColor: "transparent" }}}
			/>
			<SettingsStack.Screen
				name="Developer"
				component={AboutScreen}
				options={{cardStyle: { backgroundColor: "transparent" }}}
			/>
			<SettingsStack.Screen
				name="Contact"
				component={ContactScreen}
				options={{cardStyle: { backgroundColor: "transparent" }}}
			/>
		</SettingsStack.Navigator>
	);
  }

const AccountStackScreen = () => {
	return (
		<AccountStack.Navigator 
			initialRouteName="Account"
			screenOptions={{
				
			}}
		>
			<AccountStack.Screen 
				name="Account"
				component={Account}
				options={{cardStyle: { backgroundColor: "transparent" }}}
			/>
		</AccountStack.Navigator>
	);
}

//----------------------------------------------------------------------------------------------------------------------------------
function App() {
	const scheme = useColorScheme();
	const CustomLightTheme = {
		dark: false,
		colors: {
			primary: "#FC0B0B",
			background: "#EFEFEF",
			card: "#FFFFFF",
			text: "#000000",
			border: "#FFFFFF",
			notification: "#9933FF"
		}
	}
	const CustomDarkTheme = {
		dark: true,
		colors: {
			primary: "#FC0B0B",
			background: "#000000",
			card: "#121212",
			text: "#FFFFFF",
			border: "#121212",
			notification: "#9933FF",
		}
	}
	return (
		<AppearanceProvider>
				<NavigationContainer
					theme={scheme === 'dark' ? CustomDarkTheme : CustomLightTheme}
					
				>
					<Tab.Navigator
						initialRouteName="Home"
						screenOptions={{
							headerShown: false,
							headerTransparent: true,
							
							tabBarStyle: {
								
							}
						}}
					>
						<Tab.Screen
							name="blessthismess - Home"
							component={HomeStackScreen}
							options={{
								tabBarLabel: 'Home',
								tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons
									name="home"
									color={color}
									size={size}
								/>
								),
							}}  
						/>
						<Tab.Screen 
							name="Account Management"
							component={AccountStackScreen}
							options={{
								tabBarLabel: 'Account',
								tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons
									name="account-details"
									color={color}
									size={size}
								/>
								),
							}}
						/>
						<Tab.Screen
							name="App Settings"
							component={SettingsStackScreen}
							options={{
								tabBarLabel: 'Settings',
								tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons
									name="tune"
									color={color}
									size={size}
								/>
								),
							}} 
						/>
					</Tab.Navigator>
				</NavigationContainer>
		</AppearanceProvider>
	);
}
//----------------------------------------------------------------------------------------------------------------------------------

export default App;
