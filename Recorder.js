import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Audio} from 'expo-av';

const App = () => {

    const [recording, setRecording] = useState();

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
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
    }

    return (
        <View style={styles.container}>
            <Button title={recording ? 'Stop' : 'Record'} onPress={recording ? stopRecording : startRecording}/>
            <Button title="Play"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        margin: 50,
        backgroundColor: '#ff32aa'
    }
});

export default App;