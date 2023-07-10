import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import SectionView from './Section';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>Click to hear the sample sounds below.</Text>
            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <SectionView fileName='./Sound/moon-walk-144431.mp3'/>
                    <SectionView fileName='./Sounds/harp-motif2-36586.mp3'/>
                    <SectionView fileName='./Sounds/sax-solo-loop-26094.mp3'/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <SectionView fileName='./Sounds/xylo-song-71191.mp3'/>
                    <SectionView fileName='./Sounds/processed-cello-77996.mp3'/>
                    <SectionView fileName='./Sounds/kick-and-snare-137044.mp3'/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <SectionView fileName='./Sounds/banjo-64175.mp3'/>
                    <SectionView fileName='./Sounds/synth_pop-2-114772.mp3'/>
                    <SectionView fileName='./Sounds/wobs-90242.mp3'/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default App;