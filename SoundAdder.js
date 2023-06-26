import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const AddingArea = () => {
    return (
        <View style={{alignItems: 'stretch', borderColor: 'black', borderRadius: 5}}>
            <Text>An area for adding sounds together</Text>
            <Button title="Play"/>
        </View>
    );
};

export default AddingArea;