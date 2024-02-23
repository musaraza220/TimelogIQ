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
export default function GetStarted(props) {
  const { height, width } = useWindowDimensions();

  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: theme.colors.background,
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/time.png")}
          style={{
            width: height / 7.3,
            height: height / 7.3,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: height / 2.9,
          }}
        />

        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Image
            source={require("../assets/start.png")}
            style={{
              width: height / 6.5,
              height: height / 6.5,
              resizeMode: "contain",
              alignSelf: "center",
              marginTop: height / 4,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginTop: height / 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: height / 65,
              fontWeight: "200",
              textAlign: "center",
            }}
          >
            Check out our{`  `}
          </Text>
          <Text
            style={{
              fontSize: height / 65,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Privacy Policy
          </Text>
          <Text
            style={{
              fontSize: height / 65,
              fontWeight: "200",
              textAlign: "center",
            }}
          >
            {``}and{`  `}
          </Text>
          <Text
            style={{
              fontSize: height / 65,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Terms of Use.
          </Text>
        </View>
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
