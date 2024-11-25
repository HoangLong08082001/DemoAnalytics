import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { firebase } from "@react-native-firebase/app";
const App = () => {
  const logScreenView = async (screenName) => {
    await analytics().logScreenView({
      screen_name: screenName,
      screen_class: screenName,
    });
  };

  logScreenView("Home Screen");

  return (
    <View>
      <Text>Firebase Integrated!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
