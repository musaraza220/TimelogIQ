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
import { colors } from "../../assets/colors";
import { Text, useTheme } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function IndRegistration(props) {
  const { height, width } = useWindowDimensions();
  const [data, setData] = React.useState(null);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");
  const [code, setCode] = useState("CA");
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
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            backgroundColor: theme.colors.background,
            paddingHorizontal: width / 18,
          }}
        >
          <Image
            source={require("../../assets/back.png")}
            style={{
              width: height / 21.3,
              height: height / 21.3,
              resizeMode: "contain",
              marginTop: height / 11.9,
            }}
          />
        </TouchableOpacity>
        <View style={{ marginTop: height / 18, alignItems: "center" }}>
          <Text
            style={{
              fontSize: height / 45,
              color: colors.textColor,
              fontWeight: "bold",
              marginBottom: height / 30,
            }}
          >
            CREATE INDIVIDUAL ACCOUNT
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
              setFullname(val), setError("");
            }}
            value={email}
            placeholderTextColor={colors.GRAY}
            cursorColor="#fff"
            placeholder="Full Name"
            autoCorrect={false}
            returnKeyType="done"
          />

          <View style={{ alignItems: "flex-end", marginEnd: 13 }}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
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
            {
              padding: 0,
              margin: 20,
              marginTop: 0,
              borderWidth: 0.5,
              borderRadius: 30,
              borderColor: colors.textColor1,
            },
          ]}
        >
          <PhoneInput
            defaultCode="CA"
            layout="first"
            defaultValue={value}
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setPhone(text);
            }}
            onChangeCountry={(text) => {
              setCode(text.cca2);
            }}
            textInputStyle={{ color: theme.colors.secondary }}
            containerStyle={{
              backgroundColor: theme.colors.backgroundColor,
            }}
            textContainerStyle={{
              backgroundColor: theme.colors.backgroundColor,
            }}
            codeTextStyle={{ color: theme.colors.secondary }}
            countryPickerButtonStyle={{ padding: 0 }}
          />
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
          onPress={() => props.navigation.navigate("Login")}
          style={{ marginTop: height / 30, alignItems: "center" }}
        >
          <Text style={{ fontSize: height / 55, color: colors.textColor }}>
            Already have an anccount? Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../../assets/signupbtn.png")}
            style={{
              width: height / 3,
              height: height / 7,
              resizeMode: "contain",
              alignSelf: "center",
              marginTop: height / 70,
            }}
          />
        </TouchableOpacity>
      </View>
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
