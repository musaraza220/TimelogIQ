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
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

import { colors } from "../../../assets/colors";
import { Avatar, Text, useTheme } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function AttendnaceAdmin(props) {
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
        source={require("../../../assets/header.png")}
        style={{
          width: width,
          height: height / 5,
          paddingHorizontal: width / 20,
          paddingTop: height / 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: height / 65, color: "white" }}>
            {greetMsg}
          </Text>
          <Text style={{ fontSize: height / 65, color: "white" }}>
            {moment(Date.now()).format("ll")}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: height / 40,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Image
              size={height / 34}
              source={require("../../../assets/profPic.png")}
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
        </View>
      </ImageBackground>

      <View
        style={[
          {
            paddingHorizontal: width / 20,
            width: width,
            height: height / 1.2,
          },
        ]}
      >
        <View
          style={{
            alignItems: "center",
            padding: 30,
          }}
        >
          <Text
            style={{
              fontSize: height / 40,
              color: colors.GRAY,
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            ATTENDANCE
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 0,
            marginTop: 0,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("AttendanceHistory")}
          >
            <Image
              source={require("../../../assets/historybtn.png")}
              style={{
                height: height / 19.5,
                width: height / 7.5,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("AdminTeam")}
          >
            <Image
              source={require("../../../assets/Team.png")}
              style={{
                height: height / 19.5,
                width: height / 6.5,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.textColor,
            marginTop: height / 35,
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: height / 60,
              color: colors.GRAY,
              fontWeight: "300",
              textAlign: "center",
              marginBottom: height / 40,
            }}
          >
            09:00 AM{`\n`}Thursday, December 21
          </Text>
          <Image
            source={require("../../../assets/break.png")}
            style={{
              height: height / 19.5,
              width: height / 6.5,
              resizeMode: "contain",
              position: "absolute",
              right: -30,
              top: 14,
            }}
          />
          <ImageBackground
            source={require("../../../assets/circle.png")}
            style={{
              height: height / 4,
              width: height / 4,
              marginBottom: height / 22,
              padding: 20,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: height / 33,
                color: colors.textColor,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              CLOCK IN
            </Text>
            <Text
              style={{
                fontSize: height / 50,
                color: colors.GRAY,
                fontWeight: "300",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Admin Name
            </Text>
          </ImageBackground>
          <Text
            style={{
              fontSize: height / 60,
              color: colors.GRAY,
              fontWeight: "300",
              textAlign: "center",
              marginTop: -19,
            }}
          >
            Location ...
          </Text>
        </View>
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
