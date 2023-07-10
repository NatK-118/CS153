/*
Credit for most of the code on this page goes to the expo docs and this project
on github: https://github.com/chelseafarley/expo-av-demo/blob/master/App.js
*/

import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Audio} from 'expo-av';
import * as Haptics from 'expo-haptics';

const App = () => {

    const [recording, setRecording] = useState();
    const [holdSound, setHoldSound] = useState();

    async function startRecording() {
        try {
          await Audio.requestPermissionsAsync();
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
          });
    
          const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
          );
          setRecording(recording);
        } catch (err) {
          console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        const {sound} = await Audio.Sound.createAsync({uri},);
        setRecording(undefined);
        setHoldSound(sound);
        saveData(uri);
    }

    useEffect(() => {getData()},[])

    const getData = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('key');
            let uri = null;
            if (jsonValue != null) {
                uri = JSON.parse(jsonValue);
                const {sound} = await Audio.Sound.createAsync({uri},);
                setHoldSound(sound);
            } else {
                setHoldSound('');
            }
            return uri;
        } catch(e) {
            console.log("error getting data");
            console.dir(e);
        }
    }

    const saveData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('key', jsonValue);
        } catch(e) {
            console.log("error saving data");
            console.dir(e);
        }
    }

    const clear = async () => {
        try {
            await AsyncStorage.clear();
        } catch(e) {
            console.log("error clearing data");
            console.dir(e);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button style={styles.button} title={recording ? 'Stop' : 'Record'} onPress={recording ? stopRecording : startRecording}/>
            <Button style={styles.button} title="Play" onPress={() => {holdSound.playAsync(); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}/>
            <Button style={styles.button} title="Clear" onPress={() => {clear(); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        margin: 50,
        backgroundColor: 'pink'
    },
    button: {
        padding: 10,
        margin: 10,
        color: 'azure'
    }
});

export default App;