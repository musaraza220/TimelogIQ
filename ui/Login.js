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
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function Login(props) {
  const { height, width } = useWindowDimensions();
  const [data, setData] = React.useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pwdIcon, setPwdIcon] = useState("eye");
  const [visibility, setVisivility] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      getSaveData();
    });
    return unsubscribe;
  }, []);

  const getSaveData = async () => {
    setLoading(true);
    //await AsyncStorage.removeItem("@purchase");
    var checks = await AsyncStorage.getItem("@purchase");
    var settings = await AsyncStorage.getItem("@settings");
    var jsonDatas = JSON.parse(checks);
    var setJsonData = JSON.parse(settings);
    if (setJsonData != null) {
      setHaptic(setJsonData.haptic);
    }
    console.log(jsonDatas);
    if (jsonDatas !== null) {
      setPre(jsonDatas.purchased);
    }
    setLoading(false);
  };

  const visibilityPwd = () => {
    if (visibility) {
      setVisivility(false);
      setPwdIcon("eye-off");
    } else {
      setVisivility(true);
      setPwdIcon("eye");
    }
  };
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
          marginTop: height / 6,
        }}
      >
        <Image
          source={require("../assets/time.png")}
          style={{
            width: height / 7.5,
            height: height / 7.5,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <View style={{ marginTop: height / 18, alignItems: "center" }}>
          <Text
            style={{
              fontSize: height / 47,
              color: colors.textColor,
              fontWeight: "600",
            }}
          >
            WELCOME
          </Text>
          <Text
            style={{
              fontSize: height / 53,
              marginTop: height / 50,
              fontWeight: "200",
            }}
          >
            Log In to Continue
          </Text>
        </View>

        <View
          style={[
            styles.txtContainer,
            {
              marginTop: height / 22,
              borderWidth: 0.5,
              borderRadius: 30,
              margin: 20,
              borderColor: colors.textColor1,
            },
          ]}
        >
          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: 16,
              fontSize: height / 55,
            }}
            onChangeText={(val) => {
              setEmail(val), setError("");
            }}
            value={email}
            placeholderTextColor={colors.GRAY}
            cursorColor="#fff"
            placeholder="Email"
            autoCorrect={false}
            returnKeyType="done"
          />

          <View style={{ alignItems: "flex-end", marginEnd: 13 }}>
            <MaterialCommunityIcons
              name="email-outline"
              color={colors.textColor}
              size={height / 37}
            />
          </View>
        </View>

        <View
          style={[
            styles.txtContainer,
            {
              borderWidth: 0.5,
              borderRadius: 30,
              margin: 20,
              marginTop: 0,
              borderColor: colors.textColor1,
            },
          ]}
        >
          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: 16,
              fontSize: height / 55,
            }}
            onChangeText={(val) => {
              setPassword(val), setError("");
            }}
            value={password}
            placeholderTextColor={colors.GRAY}
            cursorColor="#fff"
            placeholder="Password"
            secureTextEntry={visibility}
            autoCorrect={false}
            returnKeyType="done"
          />

          <TouchableOpacity
            style={{ alignItems: "flex-end", marginEnd: 13 }}
            onPress={() => {
              visibilityPwd();
            }}
          >
            <MaterialCommunityIcons
              name={pwdIcon}
              color={colors.textColor}
              size={height / 37}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("AccountType")}
          style={{ marginTop: height / 50, alignItems: "center" }}
        >
          <Text style={{ fontSize: height / 55, color: colors.textColor }}>
            Don't have an anccount? Sign Up
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: height / 40, alignItems: "center" }}>
          <Text style={{ fontSize: height / 55, color: colors.textColor }}>
            Forgot Password?
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("CompanyTabs")}
        >
          <Image
            source={require("../assets/loginbtn.png")}
            style={{
              width: height / 3,
              height: height / 7,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ position: "absolute", bottom: 30, left: 0, right: 0 }}>
        <Text
          style={{
            fontSize: height / 53,
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          A Contrivity Solution
        </Text>
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
