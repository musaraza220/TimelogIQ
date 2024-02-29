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
  ScrollView,
  ImageBackground,
  Switch,
} from "react-native";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

import { colors } from "../../assets/colors";
import { Avatar, Text, useTheme } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function NewRequest(props) {
  const { height, width } = useWindowDimensions();
  const [data, setData] = React.useState(null);
  const [greetMsg, setGreetMsg] = useState("");
  const [username, setUsername] = useState("Musa Raza");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");
  const [code, setCode] = useState("CA");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pwdIcon, setPwdIcon] = useState("eye");
  const [visibility, setVisivility] = useState(true);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { styles } = useStyle();
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
    const day = new Date();
    const hr = day.getHours();
    const msgGreet =
      hr >= 0 && hr < 12
        ? "Good Morning!"
        : hr === 12
        ? "Good Noon!"
        : hr >= 12 && hr <= 17
        ? "Good Afternoon!"
        : hr > 17 && hr <= 20
        ? "Good Evening!"
        : "Good Night!";
    setGreetMsg(msgGreet);
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
    <View style={[{ backgroundColor: theme.colors.background }]}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/header.png")}
        style={{
          width: width,
          height: height / 8,
          paddingHorizontal: width / 20,
          paddingTop: height / 10,
        }}
      >
        {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: height / 65, color: "white" }}>
            {greetMsg}
          </Text>
          <Text style={{ fontSize: height / 65, color: "white" }}>
            {moment(Date.now()).format("ll")}
          </Text>
        </View> */}

        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: height / 40,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Image
              size={height / 34}
              source={require("../../assets/profPic.png")}
              style={{ backgroundColor: "white" }}
            />
            <Text
              style={{ fontSize: height / 65, color: "white", marginStart: 10 }}
            >
              {username}
            </Text>
          </View>

          <MaterialCommunityIcons
            name="bell-outline"
            color={"white"}
            size={height / 43}
          />
        </View> */}
      </ImageBackground>

      <View
        style={[
          {
            paddingHorizontal: width / 20,
            width: width,
            height: height / 1,
            marginTop: -height / 30,
            zIndex: 1,
            backgroundColor: "white",
            borderRadius: 30,
          },
        ]}
      >
        <TouchableOpacity
          style={{ marginTop: 14 }}
          onPress={() => props.navigation.goBack()}
        >
          <Image
            source={require("../../assets/back.png")}
            style={{
              height: height / 25,
              width: width / 10,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: height / 45,
            color: colors.GRAY,
            fontWeight: "300",
            textAlign: "center",
            marginVertical: height / 40,
            marginTop: 2,
          }}
        >
          TIME OFF REQUEST
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.txtContainer,
              {
                borderWidth: 0.5,
                borderRadius: 30,
                borderColor: colors.textColor1,
                marginTop: height / 70,
              },
            ]}
          >
            <TextInput
              style={{
                paddingHorizontal: 16,
                fontSize: height / 55,
              }}
              onChangeText={(val) => {
                setEmail(val), setError("");
              }}
              value={email}
              placeholderTextColor={colors.GRAY}
              cursorColor="#fff"
              placeholder="Employee's Name"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>

          <View
            style={[
              styles.txtContainer,
              {
                borderWidth: 0.5,
                borderRadius: 30,
                borderColor: colors.textColor1,
                marginTop: 16,
              },
            ]}
          >
            <TextInput
              style={{
                paddingHorizontal: 16,
                fontSize: height / 55,
              }}
              onChangeText={(val) => {
                setEmail(val), setError("");
              }}
              value={email}
              placeholderTextColor={colors.GRAY}
              cursorColor="#fff"
              placeholder="Time-off Request"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 13,
              marginTop: height / 70,
              justifyContent: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row", marginEnd: height / 30 }}>
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                color={colors.GRAY}
                size={height / 50}
              />
              <Text
                style={{
                  fontSize: height / 58,
                  fontWeight: "400",
                  color: colors.GRAY,
                }}
              >
                Days
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                color={colors.GRAY}
                size={height / 50}
              />
              <Text
                style={{
                  fontSize: height / 58,
                  fontWeight: "400",
                  color: colors.GRAY,
                }}
              >
                Hours
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.txtContainer,
              {
                borderWidth: 0.5,
                borderRadius: 30,
                borderColor: colors.textColor1,
                marginTop: 16,
              },
            ]}
          >
            <TextInput
              style={{
                paddingHorizontal: 16,
                fontSize: height / 55,
              }}
              onChangeText={(val) => {
                setEmail(val), setError("");
              }}
              value={email}
              placeholderTextColor={colors.GRAY}
              cursorColor="#fff"
              placeholder="Start"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>

          <View
            style={[
              styles.txtContainer,
              {
                borderWidth: 0.5,
                borderRadius: 30,
                borderColor: colors.textColor1,
                marginTop: 16,
              },
            ]}
          >
            <TextInput
              style={{
                paddingHorizontal: 16,
                fontSize: height / 55,
              }}
              onChangeText={(val) => {
                setEmail(val), setError("");
              }}
              value={email}
              placeholderTextColor={colors.GRAY}
              cursorColor="#fff"
              placeholder="End"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>

          <View
            style={[
              {
                borderWidth: 0.5,
                borderRadius: 30,
                borderColor: colors.textColor1,
                marginTop: 16,
                height: height / 8,
                padding: 10,
              },
            ]}
          >
            <TextInput
              style={{
                paddingHorizontal: 16,
                fontSize: height / 55,
              }}
              onChangeText={(val) => {
                setEmail(val), setError("");
              }}
              value={email}
              placeholderTextColor={colors.GRAY}
              cursorColor="#fff"
              placeholder="Notes"
              autoCorrect={false}
              returnKeyType="done"
              multiline
            />
          </View>

          <View
            style={[
              {
                marginTop: 16,
                padding: 10,
                paddingStart: 25,
                flexDirection: "row",
              },
            ]}
          >
            <Text
              style={{
                fontSize: height / 58,
                color: colors.GRAY,
                fontWeight: "400",
                marginEnd: 10,
              }}
            >
              Attachments
            </Text>
            <Entypo name="attachment" color={"gray"} size={height / 55} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 14,
              marginBottom: height / 3,
            }}
          >
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image
                source={require("../../assets/cancelbtn.png")}
                style={{
                  height: height / 6.5,
                  width: height / 6.5,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/submitbig.png")}
                style={{
                  height: height / 6.5,
                  width: height / 6.5,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const useStyle = () => {
  const { height, width } = useWindowDimensions();
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
    persTxtStyle: {
      fontSize: height / 55,
      flex: 1,
      fontWeight: "300",
    },
    headerSwitchStyle: {
      flexDirection: "row",
      marginTop: height / 50,
    },
    grayBox: {
      paddingHorizontal: height / 110,
      paddingVertical: height / 110,
      color: "gray",
      borderWidth: 0.5,
      borderColor: colors.GRAY,
      marginEnd: 10,
    },
    blueBox: {
      paddingHorizontal: height / 110,
      paddingVertical: height / 110,
      color: "white",
      backgroundColor: colors.MAIN,
      marginEnd: 10,
    },
  });
  return { styles };
};
