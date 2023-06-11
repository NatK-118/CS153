import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SectionView = () => {
    return (
        <View style={{flexDirection: 'column', flex: 1}}>
            <Text>Audio files will go here</Text>
            <Button title="Play"/>
        </View>
    );
};

export default SectionView;