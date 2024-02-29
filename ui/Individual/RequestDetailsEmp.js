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
import { Overlay } from "react-native-elements";
import { Surface } from "react-native-paper";
import { colors } from "../../assets/colors";
import { Avatar, Text, useTheme } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function RequestDetailsEmp(props) {
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
  const [showApprove, setShowApprove] = useState(false);
  const [showDenied, setShowDenied] = useState(false);
  const [showExport, setShowExport] = useState(false);
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

  const ApprovePOPUP = () => {
    return (
      <Overlay
        visible={showApprove}
        overlayStyle={{
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={{ padding: 10, width: height / 3 }}>
          <Text
            style={{
              fontSize: height / 60,
              color: colors.GRAY,
              fontWeight: "400",
              marginVertical: height / 200,
            }}
          >
            REQUEST APPROVED
          </Text>

          <View
            style={[
              {
                borderWidth: 0.5,
                borderColor: colors.textColor1,
                marginTop: 10,
                height: height / 8,
                padding: 3,
              },
            ]}
          >
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: height / 63,
              }}
              onChangeText={(val) => {
                setEmail(val), setError("");
              }}
              value={email}
              cursorColor="#fff"
              placeholder="Add Notes"
              autoCorrect={false}
              returnKeyType="done"
              multiline
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => setShowApprove(false)}>
              <Image
                source={require("../../assets/cancelbtn.png")}
                style={{
                  height: height / 13.5,
                  width: height / 6.8,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/savebtn.png")}
                style={{
                  height: height / 13.5,
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

  const DenyPOPUP = () => {
    return (
      <Overlay
        visible={showDenied}
        overlayStyle={{
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={{ padding: 10, width: height / 3 }}>
          <Text
            style={{
              fontSize: height / 60,
              color: colors.GRAY,
              fontWeight: "400",
              marginVertical: height / 200,
            }}
          >
            REQUEST DENIED
          </Text>

          <View
            style={[
              {
                borderWidth: 0.5,
                borderColor: colors.textColor1,
                marginTop: 10,
                height: height / 8,
                padding: 3,
              },
            ]}
          >
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: height / 63,
              }}
              onChangeText={(val) => {
                setEmail(val), setError("");
              }}
              value={email}
              cursorColor="#fff"
              placeholder="Add Notes"
              autoCorrect={false}
              returnKeyType="done"
              multiline
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => setShowDenied(false)}>
              <Image
                source={require("../../assets/cancelbtn.png")}
                style={{
                  height: height / 13.5,
                  width: height / 6.8,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/savebtn.png")}
                style={{
                  height: height / 13.5,
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

  const ExportPOPUP = () => {
    return (
      <Overlay
        visible={showExport}
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
              }}
            >
              EXPORT AS
            </Text>
            <TouchableOpacity onPress={() => setShowExport(false)}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                color={colors.GRAY}
                size={height / 40}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginTop: 13 }}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/PDF.png")}
                style={{
                  height: height / 16.5,
                  width: height / 6.8,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/Excel.png")}
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
        <ApprovePOPUP />
        <DenyPOPUP />
        <ExportPOPUP />
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

          <TouchableOpacity
            onPress={() => setShowExport(true)}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/export.png")}
              style={{
                height: height / 10,
                width: width / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: height / 45,
            color: colors.GRAY,
            fontWeight: "300",
            textAlign: "center",
            marginBottom: height / 40,
            marginTop: -20,
          }}
        >
          REQUEST TITLE
        </Text>
        <Surface
          elevation={1}
          style={{
            backgroundColor: "white",
            height: height / 1.9,
            marginVertical: 5,
            paddingHorizontal: height / 50,
            paddingVertical: height / 50,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  marginEnd: height / 60,
                }}
              >
                Sent By:
              </Text>
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                }}
              >
                Musa Raza
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  marginEnd: height / 31,
                }}
              >
                Start Date:
              </Text>
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  flex: 1,
                }}
              >
                {moment(Date.now()).format("lll")}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  marginEnd: height / 25,
                }}
              >
                End Date:
              </Text>
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  flex: 1,
                }}
              >
                {moment(Date.now()).format("lll")}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  marginEnd: height / 60,
                }}
              >
                Request Type:
              </Text>
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  flex: 1,
                }}
              ></Text>
            </View>

            <View
              style={{
                marginTop: height / 20,
              }}
            >
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  marginEnd: height / 60,
                }}
              >
                Notes:
              </Text>
              <Text
                style={{
                  fontSize: height / 65,
                  color: colors.GRAY,
                  fontWeight: "300",
                  textAlign: "justify",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </ScrollView>
        </Surface>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={() => setShowDenied(true)}>
            <Image
              source={require("../../assets/backbig.png")}
              style={{
                height: height / 10.5,
                width: height / 6.5,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowApprove(true)}>
            <Image
              source={require("../../assets/resubmit.png")}
              style={{
                height: height / 10.5,
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
