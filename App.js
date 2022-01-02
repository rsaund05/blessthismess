import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ title: 'Home Screen' }}
			/>
		</Stack.Navigator>
	);
  }
  
  const SettingsStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Settings"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen
				name="Settings"
				component={Settings}
			/>
			<Stack.Screen
				name="Theme"
				component={ThemeScreen}
			/>
			<Stack.Screen
				name="Color"
				component={ColorScreen}
			/>
			<Stack.Screen
				name="Font Size"
				component={FontScreen}
			/>
			<Stack.Screen
				name="Developer"
				component={AboutScreen}
			/>
			<Stack.Screen
				name="Contact"
				component={ContactScreen}
			/>
		</Stack.Navigator>
	);
  }

const AccountStack = () => {
	return (
		<Stack.Navigator 
			initialRouteName="Account"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen 
				name="Account"
				component={Account}
			/>
		</Stack.Navigator>
	);
}
  
function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
			>
				<Tab.Screen
					name="blessthismess - Home"
					component={HomeStack}
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
					component={AccountStack}
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
					component={SettingsStack}
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
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
		alignItems: 'center',
		justifyContent: 'center',
  	},
});

export default App;
