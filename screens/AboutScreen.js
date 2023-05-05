import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar"; //Pour changer le CSS de la status bar
import Constants from "expo-constants"; //Pour avoir la hauteur de la status bar
import Background from "../assets/pexels-angello-4019143.jpg";

export default function AboutScreen({ navigation, route }) {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="#e3db7e" style="light" />

        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.quote}>
            <Text style={styles.h1}>💬</Text>
            <Text style={styles.quoteText}>My name is Morgane</Text>
            <Text>My ID : {route.params.id}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.push("Contact");
              }}
            >
              <Text>Contact me</Text>
            </TouchableOpacity>
          </View>

          <View style={{ margin: 20 }}>
            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => {
                navigation.goBack("Home");
              }}
            >
              <Text style={{ fontSize: 15 }}>Go back to the quotes</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

//-----------------CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  background: {
    flex: 1,
    justifyContent: "center",
  },

  h1: {
    color: "white",
    fontSize: 45,
    textAlign: "center",
  },

  quote: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 20,
    borderRadius: 20,
    height: 500,
  },

  quoteText: {
    textAlign: "center",
    fontSize: 30,
    margin: 20,
  },

  button: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#e3db7e",
  },

  smallButton: {
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#ecedf6",
  },
});
