import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  const handlePressed = () => {
    alert("Stop! Stop! Stop! you are not gonna do me like that man");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={handlePressed}>
        Hello all devs
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <Image source={{ uri: "https://picsum.photos/200/300" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
