import { Text, Image, View, ScrollView,  } from "react-native"
import Colors from "../../global/Colors"
export default Details = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>

        <ScrollView> 

            <Image style={{}} source={require("../../images/image1.png")}></Image>

            <Text style={{ color: Colors.grayTextColor, fontSize: 18, fontWeight: "600", marginBottom: 12 }}>Residencia afro</Text>
            <Text style={{ color: Colors.grayTextColor, fontSize: 12, fontWeight: "regular", marginBottom: 40}}>o residencial afro possui o apto 201 com 4 quartos, duas suítes, uma cozinha, uma sala e uma garagem.</Text>
            

            
            <View style={{ borderColor: Colors.grayTextColor, borderWidth: 0.3, width: 350, alignItems: 'center', marginBottom: 30 }}></View>
            <Text style={{ color: Colors.grayTextColor, fontSize: 18, fontWeight: "600", marginBottom: 12 }}>Instrução para compra ou aluguel</Text>
            <Text style={{ color: Colors.grayTextColor, fontSize: 12, fontWeight: "regular", marginBottom: 40}}>Entre em contado com o proprietário  por meio do telefone 999999999</Text>
        </ScrollView>    
        </View>
    )
}

