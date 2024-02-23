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
import { Avatar, Surface, Text, useTheme } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function StartTask(props) {
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
          height: height / 5,
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
        </View> */}
      </ImageBackground>

      <View
        style={[
          {
            paddingHorizontal: width / 20,
            width: width,
            height: height / 1.1,
            marginTop: -height / 10,
            backgroundColor: "white",
            borderRadius: 20,
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
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={require("../../assets/back.png")}
              style={{
                height: height / 10,
                width: width / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: -height / 30 }}>
          <Text
            style={{
              fontSize: height / 45,
              color: colors.GRAY,
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            TASK TITLE 1
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
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{ alignSelf: "flex-end" }}
          >
            <Image
              source={require("../../assets/notes.png")}
              style={{
                height: height / 15,
                width: width / 8,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <ImageBackground
            source={require("../../assets/circle.png")}
            style={{
              height: height / 4,
              width: height / 4,
              padding: 20,
              justifyContent: "center",
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
              Started at 09:00 AM
            </Text>
            <Text
              style={{
                fontSize: height / 30,
                color: colors.textColor,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              01:06:07
            </Text>
            <Text
              style={{
                fontSize: height / 60,
                color: colors.GRAY,
                fontWeight: "300",
                textAlign: "center",
                marginTop: height / 40,
              }}
            >
              Active
            </Text>
          </ImageBackground>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: height / 30,
            }}
          >
            <TouchableOpacity activeOpacity={0.8}>
              <Image
                source={require("../../assets/Deleteblack.png")}
                style={styles.inBtnStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ marginStart: height / 15 }}
            >
              <Image
                source={require("../../assets/Detailsblack.png")}
                style={styles.inBtnStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ marginStart: height / 15 }}
            >
              <Image
                source={require("../../assets/Stopblack.png")}
                style={styles.inBtnStyle}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: height / 60,
              color: colors.GRAY,
              fontWeight: "300",
              textAlign: "center",
              marginTop: height / 40,
              marginBottom: 7,
            }}
          >
            Current Location
          </Text>
        </View>

        <Surface
          elevation={1}
          style={{
            backgroundColor: colors.BLUEBORDER,
            marginVertical: 5,
            paddingHorizontal: height / 50,
            paddingVertical: height / 50,
            marginTop: 17,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: height / 35,
                width: 5,
                backgroundColor: colors.BLUETYPE,
              }}
            ></View>
            <Text
              style={{
                fontSize: height / 70,
                fontWeight: "300",
                marginStart: 10,
              }}
            >
              Start Time: Dec 19, 2023 09:00 AM
            </Text>
          </View>
          <Text
            style={{
              fontSize: height / 70,
              fontWeight: "300",
              marginStart: 17,
              marginTop: 10,
            }}
          >
            Started At: Dec 19, 2023 09:00 AM
          </Text>
        </Surface>
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
    inBtnStyle: {
      height: height / 15,
      width: width / 10,
      resizeMode: "contain",
    },
  });
  return { styles };
};
