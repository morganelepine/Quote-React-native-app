import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar"; //Pour changer le CSS de la status bar
import Constants from "expo-constants"; //Pour avoir la hauteur de la status bar
import Background from "../assets/pexels-angello-4019143.jpg";

//A ScrollView component that handles keyboard appearance and automatically scrolls to focused TextInput
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ContactScreen({ navigation }) {
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

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
            <Text style={styles.quoteText}>Contact me</Text>

            <KeyboardAwareScrollView>
              <TextInput
                style={styles.input}
                placeholder="Your e-mail"
                value={mail}
                onChangeText={(text) => {
                  setMail(text);
                }}
              />

              <TextInput
                style={styles.input}
                placeholder="Your phone number"
                keyboardType="numeric"
                value={phone}
                onChangeText={(text) => {
                  setPhone(text);
                }}
              />

              <TextInput
                style={styles.textArea}
                placeholder="Your message"
                multiline={true}
                value={message}
                onChangeText={(text) => {
                  setMessage(text);
                }}
              />

              <TextInput
                style={styles.input}
                placeholder="Your password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.goBack("About");
                }}
              >
                <Text>Send</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>

          <View style={{ margin: 20 }}>
            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => {
                navigation.push("Home");
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
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#e3db7e",
  },

  smallButton: {
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#ecedf6",
  },

  input: {
    height: 40,
    width: 250,
    borderRadius: 10,
    borderColor: "#646681",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 5,
    padding: 5,
  },

  textArea: {
    height: 100,
    width: 250,
    borderRadius: 10,
    borderColor: "#646681",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 5,
    padding: 5,
  },
});
