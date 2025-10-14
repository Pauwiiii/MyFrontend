import {View, Text, FlatList, Alert, Button} from "react-native";
import axios from "axios";
import {useState, useEffect } from "react";
import styles from "../styles";

export default function UserListPage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.30.241:8080/registration/api/users/")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]
);

    const handleEdit = (user) => {
        navigation.navigate("EditUser", {user});
    }; 

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios.delete(`http://192.168.30.241:8080/registration/api/users/${id}/`) 
                        .then(() => { 
                            Alert.alert("Success", "User deleted successfully"); 

                        })
                        .catch((err) => {
                            console.log(err);
                            Alert.alert("Error", "Failed to delete user");
                   })      
                },
            }
        ]
    );
};
                

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.userlist}>
                        <Text style={styles.reviewText}> Firstname: {item.first_name}</Text>
                        <Text style={styles.reviewText}> Lastname: {item.last_name}</Text>
                        <Text style={styles.reviewText}> Email: {item.email}</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Edit"
                            color= "#b8e0d2"
                            onPress={() => handleEdit(item)}/>
                            <Button title="Delete"
                            color= "#ec7d7dff"
                            onPress={() => handleDelete(item.id)}/>
                        </View>
                    </View>
                )}/>
        </View>
    )
}
