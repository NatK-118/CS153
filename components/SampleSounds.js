import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SectionView from './Section';
import AddingArea from './SoundAdder';

const App = () => {
    return (
        <View style={{flex: 1}}>
            <Text style={{textAlign: center, fontSize: 20}}>Click to hear the sample sounds below.</Text>
            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <SectionView/>
                    <SectionView/>
                    <SectionView/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <SectionView/>
                    <SectionView/>
                    <SectionView/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <SectionView/>
                    <SectionView/>
                    <SectionView/>
                </View>
            </View>
            <AddingArea/>
        </View>
    );
};

export default App;