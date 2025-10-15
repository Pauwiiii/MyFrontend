import axios from "axios";
import {View, Text, Alert, TextInput, Button} from "react-native";
import React, {useState} from "react";
import styles from "../styles";

export default function EditUserPage({ route, navigation }) {
    const { user } = route.params;
    
    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [user_email, setUserEmail] = useState(user.email);
    const [user_gender , setUserGender] = useState(user.gender);
    const [user_password, setUserPassword] = useState(user.password);

    const handleUpdate = () => {
        if (!first_name || !last_name || !user_email || !user_gender || !user_password) {
            window.alert("All fields are required");
            return;
        }

        axios
        .put(`http://192.168.30.241:8000/registration/api/users/${user.id}/`, {
            first_name: first_name,
            last_name: last_name,
            email: user_email,
            gender: user_gender,
            password: user_password,
        })
        .then(() => {
            Alert.alert("Success, User updated successfully");
            navigation.goBack();
        })
        .catch((err) => {
            console.log(err);
            Alert.alert("Error", "Failed to update user");
        });

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit User Page</Text>

            <TextInput style={styles.input}
            value={first_name}
            onChangeText={setFirstName}/>

            <TextInput style={styles.input}
            value={last_name}
            onChangeText={setLastName}/>

            <TextInput style={styles.input}
            value={user_email}
            onChangeText={setUserEmail}/>

            <TextInput style={styles.input}
            value={user_gender}
            onChangeText={setUserGender}/>
            
            <TextInput style={styles.input}
            value={user_password}
            onChangeText={setUserPassword}
            secureTextEntry={true}/>    

            <View>
                <Button title="Update User" 
                onPress={handleUpdate}
                color="#809bce"/>
            </View>
            
        </View>
    );

}