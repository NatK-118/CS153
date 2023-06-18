import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

    const [text, setText] = useState("This spot will be for recording if possible");

    useEffect(() => {getData()}, []);

    const getData = async () => {
        try {
            const name = await AsyncStorage.getItem('data');
            setText(name);
        } catch(e) {
            console.log("error in getData");
            console.dir(e);
        }
    }

    const saveData = async (value) => {
        try {
            AsyncStorage.setItem('data', text);
        } catch(e) {
            console.log("error in saveData");
            console.dir(e);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput value={text} onChangeText={setText} onSubmitEditing={print({text})}/>
            <Button title="Save" onPress={saveData}/>
            <Text>{text}</Text>
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