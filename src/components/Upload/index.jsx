import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../../global/Colors";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';



const handleimageUser = () => {

    Alert.alert('Selecione', 'Selecione de onde quer pegar a foto',
        [
            {
                text: "Galeria",
                onPress: () => pickImageFromGalery(),
                style: "default"
            },
            {
                text: "Camera",
                onPress: () => pickImageFromCamera(),
                style: "default"
            },

        ],
        {
            cancelable: true 
        },
    )
}
const pickImageFromGalery = async () => {

    const options = {
        mediaType: 'photo'
    }

    const result = await launchImageLibrary(options)

    if (result?.assets) {
        setImageUser(result.assets[0].uri)
        return
    }
}

const pickImageFromCamera = async () => {

    const options = {
        mediaType: 'photo',
        saveToPhotos: false,
        cameraType: 'front',
        quality: 1
    }

    const result = await launchCamera(options);
    console.log(result);

}

const UploadComponent = ({ icon }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity >
                <Text onPress={() => handleimageUser()}>aasdsa</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.grayTextColor,
        marginBottom: 20,
        marginTop: -20
    }
})

export default UploadComponent;
