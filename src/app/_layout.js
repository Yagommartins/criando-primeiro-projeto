import { Tabs } from "expo-router"
import  Foundation  from "@expo/vector-icons/Foundation"
import  FontAwesome5  from "@expo/vector-icons/FontAwesome5"
import  MaterialCommunityIcons  from "@expo/vector-icons"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
    return (
        <Tabs scrennOptions= {{
            tabBarActiveTintColor: '#ff7b00',
            tabBarInactiveTintColor: '000',}}
            >
            <Tabs.Screen
                name="index"
                options={{ 
                    title: "Home",
                    headerShown: false,
                    tapBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />
                }}
                
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre",
                tapBarIcon: ({ color }) => <FontAwesome5 name="house-user" size={20} color={color} />
            }}
            />
            <Tabs.Screen
                name="contact"
                options={{ 
                    title: "Contato",
                    tapBarIcon: ({ color }) => <MaterialCommunityIcons name="contats" size={20} color={color} />
                }}
            />
            
            <Tabs.Screen
                name="profile"
                options={{ 
                    title: "perfil",
                    tapBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />
                }}
            />
            </Tabs>
    )
}