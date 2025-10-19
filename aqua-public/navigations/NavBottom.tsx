import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {LinearGradient} from 'expo-linear-gradient';

import Home from "../screens/Home";
import Orders from "../screens/Orders";
import Wallets from "../screens/Wallets";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import {theme} from "../constants/styles";

const BottomTabs = createBottomTabNavigator();
const curTheme = "light";

export default function NavBottom() {
    return <NavigationContainer>
        <BottomTabs.Navigator initialRouteName="Home" screenOptions={{
            headerBackground: HeaderBackground,
            headerTintColor: "#fff",
        }}>
            <BottomTabs.Screen name="Home" component={Home}/>
            <BottomTabs.Screen name="Orders" component={Orders}/>
            <BottomTabs.Screen name="Wallets" component={Wallets}/>
            <BottomTabs.Screen name="Notification" component={Notification}/>
            <BottomTabs.Screen name="Profile" component={Profile}/>
        </BottomTabs.Navigator>
    </NavigationContainer>

}

const HeaderBackground = () => {
    return <LinearGradient
        colors={theme[curTheme].colors.headerGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}} // horizontal gradient
        style={{flex: 1}}
    />
}
