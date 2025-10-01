import React from 'react';
import {View, Text, Button} from 'react-native'; // Added Button
import styles from '../styles';

export default function Homepage({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Homepage</Text>
                <Button // Changed to Button
                    title="Register" // Added title prop
                    onPress={() => navigation.navigate('Register')}
                    color="#809bce" // Added color prop to match your style
                />
            </View>
        </View>
    )
}