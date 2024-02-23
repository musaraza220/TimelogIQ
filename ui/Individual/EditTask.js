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
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

import { colors } from "../../assets/colors";
import { Avatar, Text, useTheme } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function EditTask(props) {
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
        <Text
          style={{
            fontSize: height / 45,
            color: colors.GRAY,
            fontWeight: "300",
            marginTop: height / 40,
            textAlign: "center",
          }}
        >
          EDIT TASK
        </Text>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginTop: -20 }}
            //onPress={() => props.navigation.navigate("NewTask")}
          >
            <Image
              source={require("../../assets/Delete.png")}
              style={{
                height: height / 10,
                width: width / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.txtContainer,
            {
              borderWidth: 0.5,
              borderRadius: 30,
              borderColor: colors.textColor1,
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
            placeholder="Task Title 1"
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
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing softw"
            autoCorrect={false}
            returnKeyType="done"
            multiline
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
            placeholder="Dec 12, 2024"
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
            placeholder="09:00 AM"
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
            placeholder="ABC 123, City ABC 123, Pakistan"
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
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typeset"
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
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={require("../../assets/cancelbtn.png")}
              style={{
                height: height / 9.5,
                width: height / 6.5,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/savebtn.png")}
              style={{
                height: height / 9.5,
                width: height / 6.5,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
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
