import { StyleSheet, Text, Button, View } from 'react-native'
import { useRouter } from 'expo-router'

export default function Contact() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text>Página de contato</Text>
            <Button title="Home" onPress={() => router.replace('/')}
            />

            <Button title="Sobre" onPress={() => router.push('/about')}
            />
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