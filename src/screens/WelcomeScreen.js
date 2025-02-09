import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'; 
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

            {/* Start Button */}
            <TouchableOpacity 
                style={{
                    backgroundColor: '#FF6347', // Buton rengi
                    paddingVertical: 12, // Yükseklik
                    paddingHorizontal: 40, // Genişlik
                    borderRadius: 30, // Yuvarlatılmış köşeler
                    marginTop: 30, // Üst boşluk
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: "#000", // Gölgeleme
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3.5,
                    elevation: 5, // Android'deki gölge için
                }}
                onPress={() => navigation.navigate('HomeTab')} // HomeTab'e git
            >
                <Text style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold',
                }}>
                    Başla
                </Text>
            </TouchableOpacity>
        </View>
    );  
}
