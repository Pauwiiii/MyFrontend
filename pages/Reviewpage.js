import {View, Text, Button, Alert} from 'react-native'; // Added Button
import styles from '../styles';
import axios from 'axios';

export default function ReviewPage({route, navigation}) {
    const {formData} = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/registration/api/register/",
                formData);
            Alert.alert("Success", "User Registered Successfully");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    }

    return (
        <View style={styles.reviewContainer}>
            <Text style={styles.title}>Review Information</Text>
            <Text style={styles.reviewText}>Firstname: {formData.first_name}</Text>
            <Text style={styles.reviewText}>Lastname: {formData.last_name}</Text>
            <Text style={styles.reviewText}>Email: {formData.email}</Text>
            <Text style={styles.reviewText}>Password: {formData.password}</Text>
            <Text style={styles.reviewText}>Gender: {formData.gender}</Text>

            <Button
                title="Go Back to Edit" 
                onPress={() => navigation.goBack()}
                color="#809bce" 
            />
           
            <Button 
                title="Submit"
                onPress={handleSubmit}
                color="#809bce"
            />
        </View>
    );
}