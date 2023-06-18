import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Recorder from './Recorder';
import SampleSounds from './SampleSounds'

const Stack = createNativeStackNavigator();

const MainScreen = ({navigation}) => {
    return (
        <View>
            <Button title="Recorder" onPress={() => navigation.navigate('Recorder')}/>
            <Button title="Sample Sounds" onPress={() => navigation.navigate('SampleSounds')}/>
        </View>
    );
};

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainScreen} options={{title: "Natalie's App"}}/>
                <Stack.Screen name="Recorder" component={Recorder}/>
                <Stack.Screen name="Sample Sounds" component={SampleSounds}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationStack;