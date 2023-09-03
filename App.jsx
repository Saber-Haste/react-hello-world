import React from "react"
import { Text,View,SafeAreaView,StyleSheet } from "react-native"
const MyComp = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text>
                Current Weather
            </Text>
        </View>
        </SafeAreaView>

    )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    }
})
export default MyComp