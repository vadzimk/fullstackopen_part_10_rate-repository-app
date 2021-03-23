import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import Main from './src/components/Main.jsx';



const HelloWorld = props => {
    return <Text>Hello vadiz</Text>
}

const PressableText = props => {
    return <Pressable onPress={() => Alert.alert('You pressed the text')}>
        <Text> you can press me</Text>
    </Pressable>;
}

export default function App() {

    console.log("test logggggg");

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Main/>
                <StatusBar style="auto"/>
            </View>
        </PaperProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
