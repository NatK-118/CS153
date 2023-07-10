import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {Audio} from 'expo-av';
import * as Haptics from 'expo-haptics';

const SectionView = props => {

    const [sound, setSound] = useState();

    async function playSound(fileName) {
        const { sound } = await Audio.Sound.createAsync({uri: fileName});
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

    return (
        <View style={{flexDirection: 'column', flex: 1, borderWidth: 5}}>
            <Button style={styles.button} title="Play" onPress={() => {playSound(props.fileName); Haptics.selectionAsync()}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 10,
        color: 'azure'
    }
})

export default SectionView;