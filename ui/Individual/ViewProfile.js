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
export default function ViewProfile(props) {
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
            marginTop: -8,
          }}
        >
          Musa Raza
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Avatar.Image
            size={height / 10}
            source={require("../../assets/profPic.png")}
            style={{
              backgroundColor: colors.grays,
              borderWidth: 1,
              borderColor: colors.MAIN,
              alignSelf: "center",
              marginBottom: height / 70,
            }}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              top: height / 13,
              right: height / 6.5,
            }}
          >
            <Image
              source={require("../../assets/camera.png")}
              style={{
                height: height / 35,
                width: height / 35,
                resizeMode: "contain",
                backgroundColor: "white",
              }}
            />
          </TouchableOpacity>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Email Address
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              musa@gmail.com
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Phone Number
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              +923024058011
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Work Address
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Pakistan
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Position
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Dev
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Schedule
            </Text>
          </View>
          <View
            style={[
              styles.headerSwitchStyle,
              { flexDirection: "column", alignItems: "flex-start" },
            ]}
          >
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              09:00 AM to 5:00 PM
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text style={styles.blueBox}>Mon</Text>
              <Text style={styles.grayBox}>Tue</Text>
              <Text style={styles.grayBox}>Wed</Text>
              <Text style={styles.blueBox}>Thu</Text>
              <Text style={styles.grayBox}>Fri</Text>
              <Text style={styles.grayBox}>Sat</Text>
              <Text style={styles.grayBox}>Sun</Text>
            </View>
          </View>
          <View
            style={[
              styles.headerSwitchStyle,
              { flexDirection: "column", alignItems: "flex-start" },
            ]}
          >
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              07:00 PM to 11:00 PM
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text style={styles.grayBox}>Mon</Text>
              <Text style={styles.blueBox}>Tue</Text>
              <Text style={styles.blueBox}>Wed</Text>
              <Text style={styles.grayBox}>Thu</Text>
              <Text style={styles.blueBox}>Fri</Text>
              <Text style={styles.grayBox}>Sat</Text>
              <Text style={styles.grayBox}>Sun</Text>
            </View>
          </View>

          <View style={[styles.headerSwitchStyle, { marginTop: height / 36 }]}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Admin
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Task (Edit)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>

          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Task (Edit Request)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Task (Delete)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Employee (Add)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Employee (Edit)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Employee (Delete)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Attendance (Add)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Attendance (Edit)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Attendance (Delete)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>

          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Customer (Add)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Customer (Edit)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
          </View>
          <View style={styles.headerSwitchStyle}>
            <Text numberOfLines={1} style={styles.persTxtStyleBold}>
              Customer (Delete)
            </Text>
            <Text numberOfLines={1} style={styles.persTxtStyle}>
              Yes
            </Text>
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
                source={require("../../assets/DeleteBtn.png")}
                style={{
                  height: height / 6.5,
                  width: height / 6.5,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/editBtn.png")}
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
      fontSize: height / 60,
      fontWeight: "300",
      color: colors.GRAY,
    },

    persTxtStyleBold: {
      fontSize: height / 60,
      fontWeight: "500",
      color: colors.GRAY,
    },

    headerSwitchStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: height / 50,
      justifyContent: "space-between",
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
