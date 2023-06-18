import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const SectionView = () => {

    const [isPlaying, setPlaying] = useState(false);

    return (
        <View style={{flexDirection: 'column', flex: 1}}>
            <Text>Audio files will go here</Text>
            <Button title="Play" disabled={isPlaying} onPress={setPlaying(true)}/>
        </View>
    );
};

export default SectionView;