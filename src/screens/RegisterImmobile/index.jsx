import { View, Text, TouchableOpacity, Button, ScrollView, } from 'react-native';
import Colors from '../../global/Colors'

import InputComponent from '../../components/TextInput';
import UploadComponent from '../../components/Upload';

export default RegisterImmobile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
            <ScrollView>
                <View style={{ marginRight: 10, padding: 12 }}>
                    <Text style={{ color: Colors.grayTextColor, fontSize: 30, fontWeight: "bold", marginBottom: 30 }}>Dados</Text>
                    <View style={{ borderColor: Colors.grayTextColor, borderWidth: 0.3, width: 350, alignItems: 'center', marginBottom: 30 }}></View>
                    <Text style={{ color: Colors.blueTextColor, fontSize: 13, fontWeight: "regular" }}>Nome</Text>
                    <InputComponent></InputComponent>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: Colors.blueTextColor, fontSize: 13, fontWeight: "regular" }}>Sobre</Text>
                        <Text style={{ color: Colors.grayTextColor, fontSize: 10, fontWeight: "regular", marginTop: 5 }}>Máximo de 300 Caracteres</Text>
                    </View>
                    <InputComponent style={{ height: 50 }}></InputComponent>
                    <Text style={{ color: Colors.blueTextColor, fontSize: 13, fontWeight: "regular" }}>Foto</Text>
                    <UploadComponent></UploadComponent>
                </View>
                <Text style={{ color: Colors.grayTextColor, fontSize: 24, fontWeight: "bold" }}>Instruções para comprar e alugar</Text>
                <View style={{ marginRight: 10, padding: 12 }}>
                    <Text style={{ color: Colors.blueTextColor, fontSize: 13, fontWeight: "regular" }}>Intruções</Text>
                    <InputComponent></InputComponent>
                </View>
                <TouchableOpacity>
                    <Button
                        title='Cadastrar'
                        onPress={() => navigation.navigate('Dashboard')}
                    />
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}