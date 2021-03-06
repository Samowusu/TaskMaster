// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useState } from "react";
import Calendar from "./components/Calendar";
import Tasks from "./components/Tasks";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import CreateTaskModal from "./components/CreateTaskModal";

export default function App() {
  const [showModalState, setShowModalState] = useState(false);
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  const toggleModalHandler = () => {
    setShowModalState((prevState) => !prevState);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>A clean slate!</Text>
      <Text
        style={{ ...styles.descriptionText, fontFamily: "Poppins_600SemiBold" }}
      >
        Let's find something to do...
      </Text>
      <Calendar />
      <Tasks onPress={toggleModalHandler} />
      <CreateTaskModal
        visible={showModalState}
        toggleModal={toggleModalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    paddingTop: 10,
    paddingLeft: 20,
  },
  descriptionText: {
    color: "#707070",
    fontSize: 22,
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
  },
});
