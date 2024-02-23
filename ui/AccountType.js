import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
  TextInput,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { colors } from "../assets/colors";
import { Text, useTheme } from "react-native-paper";
// import { useTheme } from "@react-navigation/native";
export default function AccountType(props) {
  const { height, width } = useWindowDimensions();

  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{
          backgroundColor: theme.colors.background,
          paddingHorizontal: width / 18,
        }}
      >
        <Image
          source={require("../assets/back.png")}
          style={{
            width: height / 21.3,
            height: height / 21.3,
            resizeMode: "contain",
            marginTop: height / 11.9,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: theme.colors.background,
          paddingHorizontal: width / 18,
          alignItems: "center",
          marginTop: height / 13.9,
        }}
      >
        <Text
          style={{
            fontSize: height / 45,
            color: colors.textColor,
            fontWeight: "bold",
            marginBottom: height / 30,
          }}
        >
          CHOOSE ACCOUNT TYPE
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("IndRegistration")}
        >
          <Image
            source={require("../assets/indacc.png")}
            style={{
              width: height / 4.3,
              height: height / 4.3,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("PayType")}>
          <Image
            source={require("../assets/comacc.png")}
            style={{
              width: height / 4.3,
              height: height / 4.3,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.colors.background,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Linking.openURL("https://timelogiq.ca/privacy.html")}
          style={{
            backgroundColor: theme.colors.background,
            padding: 5,
            alignItems: "center",
            flexDirection: "row",
            paddingStart: 10,
          }}
        >
          <Text>Check out our </Text>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            Linking.openURL("https://timelogiq.ca/terms-of-use.html")
          }
          style={{
            backgroundColor: theme.colors.background,
            padding: 5,
            alignItems: "center",
            flexDirection: "row",
            paddingStart: 0,
          }}
        >
          <Text>and </Text>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Terms of Use.
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerItems: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    textAlign: "center",
    color: colors.WHITE,
    fontSize: 22,
  },
  btnStyle: {
    backgroundColor: colors.MAIN,
    padding: 50,
  },

  txtBack: {
    marginBottom: 10,
    overflow: "hidden",
    resizeMode: "contain",
    borderRadius: 10,
  },
  txtContainer: {
    padding: 7,
    paddingVertical: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
