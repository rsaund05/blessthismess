import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './src/Contexts/ThemeContext';
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

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
			
		>
			<HomeStack.Screen
				name="Home"
				component={Home}
				options={{ title: 'Home Screen' }}
			/>
		</HomeStack.Navigator>
	);
  }
  
  const SettingsStackScreen = () => {
	return (
		<SettingsStack.Navigator
			initialRouteName="Settings"
			
		>
			<SettingsStack.Screen
				name="Settings"
				component={Settings}
			/>
			<SettingsStack.Screen
				name="Theme"
				component={ThemeScreen}
			/>
			<SettingsStack.Screen
				name="Color"
				component={ColorScreen}
			/>
			<SettingsStack.Screen
				name="Font Size"
				component={FontScreen}
			/>
			<SettingsStack.Screen
				name="Developer"
				component={AboutScreen}
			/>
			<SettingsStack.Screen
				name="Contact"
				component={ContactScreen}
			/>
		</SettingsStack.Navigator>
	);
  }

const AccountStackScreen = () => {
	return (
		<AccountStack.Navigator 
			initialRouteName="Account"
		>
			<AccountStack.Screen 
				name="Account"
				component={Account}
			/>
		</AccountStack.Navigator>
	);
}

//----------------------------------------------------------------------------------------------------------------------------------
function App() {
	return (
		<AppearanceProvider>
			<ThemeProvider>
				<NavigationContainer>
					<Tab.Navigator
						initialRouteName="Home"
						screenOptions={{
							headerShown: false
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
			</ThemeProvider>
		</AppearanceProvider>
	);
}
//----------------------------------------------------------------------------------------------------------------------------------

export default App;
