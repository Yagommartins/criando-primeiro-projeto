import { StyleSheet, Text, Button, View } from 'react-native'
import { useRouter } from 'expo-router'

export default function Sobre() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button title="Home" onPress={() => router.replace('/')} />
            <Button title="Contato" onPress={() => router.push('/contact')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})