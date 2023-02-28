import {Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const handleimageUser = ({setImage}) => {

    Alert.alert('Selecione', 'Selecione de onde quer pegar a foto',
        [
            {
                text: "Galeria",
                onPress: () => pickImageFromGalery({setImage}),
                style: "default"
            },
            {
                text: "Camera",
                onPress: () => pickImageFromCamera({setImage}),
                style: "default"
            },

        ],
        {
            cancelable: true
        },
    )
}
const pickImageFromGalery = async ({setImage}) => {

    /* const options = {
        mediaType: 'photo'
    }

    const result = await launchImageLibrary(options)

    if (result?.assets) {
        setImageUser(result.assets[0].uri)
        return
    } */
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
}

const pickImageFromCamera = async ({setImage}) => {

    /* const options = {
        mediaType: 'photo',
        saveToPhotos: false,
        cameraType: 'front',
        quality: 1
    }

    const result = await launchCamera(options);
    console.log(result); */

    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }

}
export default handleimageUser;