import { View, Text, Image, StatusBar } from 'react-native'; 
import React from 'react'; 
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() { 
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require("../../assets/welcome.jpg")}
                style={{ position: 'absolute', width: "100%", height: "100%" }} // Resmi tam ekran yapmak için
                resizeMode="cover"
            />
            <StatusBar barStyle="light-content" /> {/* StatusBar'ı düzgün kullanıyoruz */}

            {/* Container for "MA" */}
            <View style={{
                backgroundColor: 'red',
                paddingVertical: 20,
                paddingHorizontal: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>MA</Text>
            </View>

            {/* Movie App Text */}
            <Text style={{
                fontSize: 24, 
                color: 'white', 
                textAlign: 'center',
                marginTop: 20 // Araya biraz boşluk ekledik
            }}>
                Movie App
            </Text>

            {/* Film izlemenin tek adresi */}
            <Text style={{
                fontSize: 18, 
                color: 'white', 
                textAlign: 'center',
                marginTop: 10 // Araya biraz daha boşluk ekledik
            }}>
                Film izlemenin tek adresi
            </Text>
        </View>
    );  
}
