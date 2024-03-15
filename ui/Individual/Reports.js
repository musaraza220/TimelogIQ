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
import { Avatar, Text, useTheme, Surface } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function Reports(props) {
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
      ></ImageBackground>

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
            marginBottom: height / 40,
            marginTop: height / 90,
          }}
        >
          REPORTS
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.navigation.navigate("ViewProfile")}
        >
          <Surface
            elevation={1}
            style={{
              backgroundColor: "white",
              height: height / 15,
              marginVertical: 10,
              marginHorizontal: height / 180,
              justifyContent: "center",
              paddingHorizontal: height / 60,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: height / 60,
                    marginStart: height / 80,
                  }}
                >
                  Tasks
                </Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={height / 33}
                color={colors.GRAY}
              />
            </View>
          </Surface>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.navigation.navigate("Accounts")}
        >
          <Surface
            elevation={1}
            style={{
              backgroundColor: "white",
              height: height / 15,
              marginVertical: 10,
              marginHorizontal: height / 180,
              justifyContent: "center",
              paddingHorizontal: height / 60,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: height / 60,
                    marginStart: height / 80,
                  }}
                >
                  Employees
                </Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={height / 33}
                color={colors.GRAY}
              />
            </View>
          </Surface>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.navigation.navigate("Accounts")}
        >
          <Surface
            elevation={1}
            style={{
              backgroundColor: "white",
              height: height / 15,
              marginVertical: 10,
              marginHorizontal: height / 180,
              justifyContent: "center",
              paddingHorizontal: height / 60,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: height / 60,
                    marginStart: height / 80,
                  }}
                >
                  Customers
                </Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={height / 33}
                color={colors.GRAY}
              />
            </View>
          </Surface>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.navigation.navigate("Accounts")}
        >
          <Surface
            elevation={1}
            style={{
              backgroundColor: "white",
              height: height / 15,
              marginVertical: 10,
              marginHorizontal: height / 180,
              justifyContent: "center",
              paddingHorizontal: height / 60,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: height / 60,
                    marginStart: height / 80,
                  }}
                >
                  Requests
                </Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={height / 33}
                color={colors.GRAY}
              />
            </View>
          </Surface>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.navigation.navigate("Accounts")}
        >
          <Surface
            elevation={1}
            style={{
              backgroundColor: "white",
              height: height / 15,
              marginVertical: 10,
              marginHorizontal: height / 180,
              justifyContent: "center",
              paddingHorizontal: height / 60,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: height / 60,
                    marginStart: height / 80,
                  }}
                >
                  Attendance
                </Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={height / 33}
                color={colors.GRAY}
              />
            </View>
          </Surface>
        </TouchableOpacity>
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
