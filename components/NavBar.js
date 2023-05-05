import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

const Navigation = useNavigation();

export default function NavBar() {
  return (
    <>
      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => {
          navigation.navigate("About", {
            id: 86,
            otherParam: "Another random param",
          });
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => {
          navigation.navigate("About", {
            id: 86,
            otherParam: "Another random param",
          });
        }}
      >
        <Text>Contact</Text>
      </TouchableOpacity>
    </>
  );
}
