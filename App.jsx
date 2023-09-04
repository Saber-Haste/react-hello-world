import React from "react"
import { Text,View,SafeAreaView,StyleSheet } from "react-native"
const MyComp = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={{backgroundColor: "yellow"}}>
                <Text>
                    Hello World
                </Text>
            </View>

        </SafeAreaView>

    )
    
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }

})
export default MyComp