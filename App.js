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
import Settings from './src/screens/SettingsScreens/Settings';
import Account from './src/screens/Account';
import ThemeScreen from './src/screens/SettingsScreens/ThemeScreen';
import ColorScreen from './src/screens/SettingsScreens/ColorScreen';
import FontScreen from './src/screens/SettingsScreens/FontScreen';
import AboutScreen from './src/screens/SettingsScreens/AboutScreen';
import ContactScreen from './src/screens/SettingsScreens/ContactScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerBackTitleVisible: false
				
			}}
		>
			<HomeStack.Screen
				name="Home"
				component={Home}
				options={{ 
					headerStyle: {
						backgroundColor: "#FC0B0B",
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<HomeStack.Screen
				name="Dashboard"
				component={Dashboard}
				options={({route}) => ({title: route.params.title,
					headerStyle: {
						backgroundColor: "#FC0B0B",
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				})}
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
				options={{
					headerStyle: {
						backgroundColor: "#FC0B0B",
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<SettingsStack.Screen
				name="Theme"
				component={ThemeScreen}
				options={{
					headerStyle: {
						backgroundColor: "#FC0B0B",
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<SettingsStack.Screen
				name="Color"
				component={ColorScreen}
				options={{
					headerStyle: {
						backgroundColor: "#FC0B0B",
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<SettingsStack.Screen
				name="Font Size"
				component={FontScreen}
				options={{
					headerStyle: {
						backgroundColor: "#FC0B0B",
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<SettingsStack.Screen
				name="Developer"
				component={AboutScreen}
				options={{
					headerStyle: {
						backgroundColor: "#FC0B0B",
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<SettingsStack.Screen
				name="Contact"
				component={ContactScreen}
				options={{
					headerStyle: {
						backgroundColor: "#FC0B0B",
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
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
				options={{
					headerStyle: {
						backgroundColor: "#FC0B0B",
				  	},
				  	headerTintColor: '#FFFFFF',
				  	headerTitleStyle: {
						fontWeight: 'bold',
				  	},
				}}
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
