import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
    const [text, setText] = React.useState("This spot will be for recording if possible");

    return (
        <View style={styles.container}>
            <TextInput value={text} onChangeText={setText} onSubmitEditing={print({text})}/>
            <Button/>
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