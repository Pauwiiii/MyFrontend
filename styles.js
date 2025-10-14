import { use } from "react";
import {StyleSheet} from "react-native";
import { Button } from "react-native-web";

export default StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#809bce',
    marginBottom: 16,
    letterSpacing: 1,
  },
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#d6eadf',
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#95b8d1',
    padding: 14,
    marginBottom: 18,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#809bce',
  },
  card: {
    backgroundColor: '#eac4d5',
    padding: 22,
    marginBottom: 18,
    borderRadius: 14,
    shadowColor: '#809bce',
    shadowOpacity: 0.13,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  // Removed button and buttonText styles
  label: {
    fontSize: 16,
    color: '#809bce',
    marginBottom: 4,
    fontWeight: '600',
  },
  reviewContainer: {
    backgroundColor: '#b8e0d2',
    borderRadius: 14,
    padding: 50,
    margin: 50,
    shadowColor: '#809bce',
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  reviewText: {
    fontSize: 17,
    color: '#809bce',
    marginBottom: 8,
  },

userlist: {
  backgroundColor: '#eac4d5',
  borderRadius: 14,
  padding: 20,
  marginHorizontal: 20,
  marginBottom: 15,
  shadowColor: '#809bce',
  shadowOpacity: 0.15,
  shadowOffset: { width: 0, height: 3 },
  shadowRadius: 5,
  elevation: 3,
},

  });