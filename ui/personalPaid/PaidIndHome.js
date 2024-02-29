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
import { Avatar, Badge, Text, useTheme, ProgressBar } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function PaidIndHome(props) {
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
        <View>
          <ImageBackground
            source={require("../../assets/adminheader.png")}
            style={{
              padding: 1,
            }}
            imageStyle={{
              height: height / 6.9,
              width: height / 2.34,
              resizeMode: "stretch",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginEnd: 10,
                paddingHorizontal: height / 35,
                paddingVertical: height / 70,
              }}
            >
              <Text
                style={{
                  fontSize: height / 50,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Scheduled
              </Text>
              <Text
                style={{
                  fontSize: height / 84,
                  color: "white",
                  fontWeight: "400",
                }}
              >
                (Last 30 Days)
              </Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginEnd: 10,
                paddingHorizontal: height / 35,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontSize: height / 17,
                  color: "white",
                  fontWeight: "600",
                  marginTop: -height / 190,
                }}
              >
                04
              </Text>
              <View style={{ marginTop: -height / 110 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.BLUETYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    START TIME
                  </Text>
                  <ProgressBar
                    progress={0.5}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.BLUETYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 AM
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: height / 90,
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.YELLOWTYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    START TIME
                  </Text>
                  <ProgressBar
                    progress={0.5}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.YELLOWTYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 AM
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: height / 90,
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.GREENTYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    START TIME
                  </Text>
                  <ProgressBar
                    progress={0.5}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.GREENTYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 AM
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <Text
            style={{
              fontSize: height / 80,
              color: colors.MAIN,
              fontWeight: "bold",
              marginEnd: height / 60,
              textAlign: "right",
              marginTop: 10,
            }}
          >
            {" "}
            View All
          </Text>
        </View>

        <View style={{ marginTop: 8 }}>
          <ImageBackground
            source={require("../../assets/adminheader.png")}
            style={{
              padding: 1,
            }}
            imageStyle={{
              height: height / 6.9,
              width: height / 2.34,
              resizeMode: "stretch",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginEnd: 10,
                paddingHorizontal: height / 35,
                paddingVertical: height / 70,
              }}
            >
              <Text
                style={{
                  fontSize: height / 50,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                In Progress
              </Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginEnd: 10,
                paddingHorizontal: height / 35,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontSize: height / 17,
                  color: "white",
                  fontWeight: "600",
                  marginTop: -height / 190,
                }}
              >
                03
              </Text>
              <View style={{ marginTop: -height / 110 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.BLUETYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    TASK NAME
                  </Text>
                  <ProgressBar
                    progress={0.5}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.BLUETYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 hr
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: height / 80,
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.YELLOWTYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    TASK NAME
                  </Text>
                  <ProgressBar
                    progress={0.3}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.YELLOWTYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 hr
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: height / 80,
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.GREENTYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    TASK NAME
                  </Text>
                  <ProgressBar
                    progress={0.5}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.GREENTYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 hr
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <Text
            style={{
              fontSize: height / 80,
              color: colors.MAIN,
              fontWeight: "bold",
              marginEnd: height / 60,
              textAlign: "right",
              marginTop: 10,
            }}
          >
            {" "}
            View All
          </Text>
        </View>

        <View style={{ marginTop: 8 }}>
          <ImageBackground
            source={require("../../assets/adminheader.png")}
            style={{
              padding: 1,
            }}
            imageStyle={{
              height: height / 6.9,
              width: height / 2.34,
              resizeMode: "stretch",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginEnd: 10,
                paddingHorizontal: height / 35,
                paddingVertical: height / 70,
              }}
            >
              <Text
                style={{
                  fontSize: height / 50,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                NEW
              </Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginEnd: 10,
                paddingHorizontal: height / 35,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontSize: height / 17,
                  color: "white",
                  fontWeight: "600",
                  marginTop: -height / 190,
                }}
              >
                05
              </Text>
              <View style={{ marginTop: -height / 110 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.BLUETYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    START TIME
                  </Text>
                  <ProgressBar
                    progress={0.5}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.BLUETYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 AM
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: height / 80,
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.YELLOWTYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    START TIME
                  </Text>
                  <ProgressBar
                    progress={0.3}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.YELLOWTYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 PM
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: height / 80,
                  }}
                >
                  <Badge
                    size={height / 90}
                    style={{
                      backgroundColor: colors.GREENTYPE,
                      borderWidth: 0.8,
                      borderColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginEnd: height / 110,
                    }}
                  >
                    {" "}
                    START TIME
                  </Text>
                  <ProgressBar
                    progress={0.5}
                    style={{
                      backgroundColor: "white",
                      width: width / 5,
                    }}
                    color={colors.GREENTYPE}
                  />
                  <Text
                    style={{
                      fontSize: height / 90,
                      color: "white",
                      fontWeight: "bold",
                      marginStart: height / 120,
                    }}
                  >
                    {" "}
                    02:15 AM
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <Text
            style={{
              fontSize: height / 80,
              color: colors.MAIN,
              fontWeight: "bold",
              marginEnd: height / 60,
              textAlign: "right",
              marginTop: 10,
            }}
          >
            {" "}
            View All
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
