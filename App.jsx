import React from "react"
import { Text,View,SafeAreaView,StyleSheet } from "react-native"
const MyComp = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text>
                    Current Weather
                </Text>
            </View>
        </SafeAreaView>

    )
    
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        backgroundColor: "blue",
        flex: 1,
        alignItems: "center"
    },

})
export default MyComp