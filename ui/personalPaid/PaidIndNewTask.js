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
import { Overlay } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function PaidIndNewTask(props) {
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
  const [showCancel, setShowCancel] = useState(false);

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

  const CancelPopUp = () => {
    return (
      <Overlay
        visible={showCancel}
        overlayStyle={{
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={{ padding: 10, width: height / 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: height / 60,
                color: colors.GRAY,
                fontWeight: "400",
                marginVertical: height / 200,
                textAlign: "center",
              }}
            >
              Are you sure you want to cancel?
            </Text>
            {/* <TouchableOpacity onPress={() => setShowCancel(false)}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                color={colors.GRAY}
                size={height / 40}
              />
            </TouchableOpacity> */}
          </View>

          <View style={{ alignItems: "center", marginTop: 13 }}>
            <TouchableOpacity
              onPress={() => [setShowCancel(false), props.navigation.goBack()]}
            >
              <Image
                source={require("../../assets/Yes.png")}
                style={{
                  height: height / 16.5,
                  width: height / 6.8,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => [setShowCancel(false)]}>
              <Image
                source={require("../../assets/No.png")}
                style={{
                  height: height / 16.5,
                  width: height / 6.8,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    );
  };
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
                height: height / 11,
                width: width / 11,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
        <CancelPopUp />
        <Text
          style={{
            fontSize: height / 45,
            color: colors.GRAY,
            fontWeight: "300",
            textAlign: "center",
            marginVertical: height / 40,
            marginTop: -height / 50,
          }}
        >
          ADD TASK
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
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
              placeholder="Task Name"
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
              placeholder="Description"
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
              placeholder="Start Date"
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
              placeholder="Start Time"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>
          <Text
            style={{
              fontSize: height / 58,
              fontWeight: "500",
              marginStart: height / 40,
              marginTop: height / 40,
            }}
          >
            Customer
          </Text>

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
              placeholder="Name"
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
              placeholder="Contact #"
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
              placeholder="Email"
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
              placeholder="Location"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>

          <Text
            style={{
              fontSize: height / 58,
              fontWeight: "500",
              marginStart: height / 40,
              marginTop: height / 40,
            }}
          >
            Billing
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: height / 60,
              marginHorizontal: 5,
              marginTop: height / 80,
            }}
          >
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
                Hourly
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
                Task
              </Text>
            </View>
            <View
              style={[
                {
                  borderWidth: 0.5,
                  borderColor: colors.textColor1,
                  paddingVertical: 5,
                },
              ]}
            >
              <TextInput
                style={{
                  paddingHorizontal: 10,
                  fontSize: height / 58,
                }}
                onChangeText={(val) => {
                  setEmail(val), setError("");
                }}
                value={email}
                placeholderTextColor={colors.GRAY}
                cursorColor="#fff"
                placeholder="Amount CAD"
                autoCorrect={false}
                returnKeyType="done"
              />
            </View>
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
            <TouchableOpacity onPress={() => setShowCancel(true)}>
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
                source={require("../../assets/savebtn.png")}
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
