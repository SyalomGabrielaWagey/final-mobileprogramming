import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, SignIn, SignUp, Home, ProductDetails, Payment, OrderSuccess, NewArrival, Sale} from "./pages";


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
             <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
             <Stack.Screen 
                name="ProductDetails"
                component={ProductDetails}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Payment"
                component={Payment}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="OrderSuccess"
                component={OrderSuccess}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="NewArrival"
                component={NewArrival}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Sale"
                component={Sale}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router;