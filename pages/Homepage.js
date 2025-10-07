import React from 'react';
import {View, Text, Button} from 'react-native'; 
import styles from '../styles';

export default function Homepage({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Homepage</Text>
                <Button 
                    title="Register" 
                    onPress={() => navigation.navigate('Register')}
                    color="#809bce" 
                />
                <Button 
                    title="View Users" 
                    onPress={() => navigation.navigate('UserList')}
                    color="#809bce" 
                />
            </View>
        </View>
    )
}