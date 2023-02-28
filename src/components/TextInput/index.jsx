import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../../global/Colors";

const InputComponent = ({ icon }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Ionicons name={icon} size={20} />
            </TouchableOpacity>        
            <TextInput style={styles.input}>
            </TextInput>       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.grayTextColor,
        marginBottom: 20,
        marginTop: -20
    }
})

export default InputComponent;