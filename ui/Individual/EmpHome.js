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
  FontAwesome5,
} from "@expo/vector-icons";

import { colors } from "../../assets/colors";
import { Avatar, Text, useTheme } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function EmpHome(props) {
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
        source={require("../../assets/header.png")}
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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: height / 40,
              color: colors.GRAY,
              fontWeight: "300",
            }}
          >
            TODAY'S TASKS
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("NewTask")}
          >
            <Image
              source={require("../../assets/newtask.png")}
              style={{
                height: height / 10,
                width: width / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: height / 50,
            paddingStart: height / 70,
          }}
        >
          <Text
            style={{
              fontSize: height / 60,
              color: colors.GRAY,
              fontWeight: "300",
            }}
          >
            UPCOMING
          </Text>
          <Text
            style={{
              fontSize: height / 60,
              color: colors.GRAY,
              fontWeight: "300",
            }}
          >
            IN-PROGRESS
          </Text>
          <Text
            style={{
              fontSize: height / 60,
              color: colors.GRAY,
              fontWeight: "300",
            }}
          >
            NEW
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor: colors.textColor,
            borderWidth: 0.5,
            marginTop: height / 70,
            paddingHorizontal: height / 35,
            paddingVertical: height / 90,
          }}
        >
          <Text
            style={{
              fontSize: height / 18,
              color: colors.textColor,
              fontWeight: "700",
            }}
          >
            4
          </Text>
          <Text
            style={{
              fontSize: height / 18,
              color: colors.textColor,
              fontWeight: "700",
            }}
          >
            3
          </Text>
          <Text
            style={{
              fontSize: height / 18,
              color: colors.textColor,
              fontWeight: "700",
            }}
          >
            2
          </Text>
        </View>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.textColor,
            marginTop: height / 40,
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
              marginBottom: height / 20,
            }}
          >
            You haven't Clocked In yet
          </Text>
          <ImageBackground
            source={require("../../assets/circle.png")}
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
                fontSize: height / 27,
                color: colors.textColor,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              CLOCK IN
            </Text>
          </ImageBackground>
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
