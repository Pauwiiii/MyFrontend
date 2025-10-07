import {View, Text, Button, TextInput} from 'react-native'; // Added Button
import styles from '../styles';
import {useState} from 'react';

export default function RegisterPage({navigation}) {
const[formData, setFormData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    gender:"",
});

const handleChange =(field, value) => {
    setFormData({...formData, [field]:value});
};

    return(
        <View style={styles.container}>
            <Text style={styles.title}>User Registration</Text>
           
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input}
                placeholder='First Name'
                value={formData.first_name}
                onChangeText={(text) => handleChange("first_name",text)} />

            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input}
                placeholder='Last Name'
                value={formData.last_name}
                onChangeText={(text) => handleChange("last_name",text)} />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}
                placeholder='Email'
                value={formData.email}
                onChangeText={(text) => handleChange("email",text)} />

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input}
                placeholder='Password'
                value={formData.password}
                secureTextEntry
                onChangeText={(text) => handleChange("password",text)} />

            <Text style={styles.label}>Gender</Text>
            <TextInput style={styles.input}
                placeholder='Gender'
                value={formData.gender}
                onChangeText={(text) => handleChange("gender",text)} />

            <Button 
                title="Review and Submit" 
                onPress={() => navigation.navigate("Review", {formData})}
                color="#809bce" 
            />
        </View>
    )
}