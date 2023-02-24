import { View, Text, TouchableOpacity, Button, ScrollView, } from 'react-native';
import Colors from '../../global/Colors'
import { Ionicons } from '@expo/vector-icons';

import InputComponent from '../../components/TextInput';

export default RegisterImmobile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>RegisterImmobile</Text>
            <ScrollView>
                <View style={{ marginRight: 10, padding: 12 }}>
                    <Text style={{ color: Colors.grayTextColor, fontSize: 40, fontWeight: "bold" }}>Dados</Text>

                    <Text style={{ color: Colors.blueTextColor, fontSize: 16, fontWeight: "regular" }}>Nome</Text>
                    <InputComponent></InputComponent>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ color: Colors.blueTextColor, fontSize: 16, fontWeight: "regular" }}>Sobre</Text>
                        <Text style={{ color: Colors.grayTextColor, fontSize: 10, fontWeight: "regular", marginTop: 10 }}>Máximo de 300 Caracteres</Text>
                    </View>
                    <InputComponent style={{ height: 50 }}></InputComponent>
                    <Text style={{ color: Colors.blueTextColor, fontSize: 16, fontWeight: "regular" }}>Foto</Text>
                    <InputComponent></InputComponent>
                </View>
                <Text style={{ color: Colors.grayTextColor, fontSize: 24, fontWeight: "bold" }}>Instruções para comprar e alugar</Text>
                <View style={{ marginRight: 10, padding: 12 }}>
                    <Text style={{ color: Colors.blueTextColor, fontSize: 16, fontWeight: "regular" }}>Intruções</Text>
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