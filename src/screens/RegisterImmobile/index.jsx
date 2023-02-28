import { View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import Colors from '../../global/Colors'

import Button from '../../components/Button';
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ color: Colors.blueTextColor, fontSize: 13, fontWeight: "regular" }}>Sobre</Text>
                        <Text style={{ color: Colors.grayTextColor, fontSize: 10, fontWeight: "regular", marginTop: 5 }}>Máximo de 300 Caracteres</Text>
                    </View>
                    <InputComponent style={{padding: 40}}></InputComponent>
                    <Text style={{ color: Colors.blueTextColor, fontSize: 13, fontWeight: "regular", marginTop: 10, marginBottom: 10 }}>Fotos</Text>
                    <View style={{ borderColor: Colors.blueColor, borderWidth: 1.5, borderRadius: 20, borderStyle: "dashed", color: Colors.blueColor }}>
                        <Button
                            font={30}
                            colortitle={Colors.blueColor}
                            title='+'
                            bdcolor={Colors.bluecolor}
                            border={20}
                            height={52}
                        >+</Button>
                    </View>
                </View>
                <Text style={{ color: Colors.grayTextColor, fontSize: 24, fontWeight: "bold" }}>Instruções para comprar e alugar</Text>
                <View style={{ marginRight: 10, padding: 12 }}>
                    <Text style={{ color: Colors.blueTextColor, fontSize: 13, fontWeight: "regular" }}>Intruções</Text>
                    <InputComponent></InputComponent>
                </View>
                <TouchableOpacity>
                    <View style={{ marginRight: 10, padding: 12 }}>
                        <Button
                            title='Cadastrar'
                            onPress={() => navigation.navigate('Dashboard')}
                            colortitle={Colors.whiteColor}
                            color={Colors.blueColor}
                            border={20}
                            height={52}
                        />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}