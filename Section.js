import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Audio} from 'expo-av';

const SectionView = () => {

    const [sound, setSound] = useState();

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync( require('./Sounds/moon-walk-144431.mp3')
    );
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

    return (
        <View style={{flexDirection: 'column', flex: 1}}>
            <Button title="Play" onPress={playSound}/>
        </View>
    );
};

export default SectionView;