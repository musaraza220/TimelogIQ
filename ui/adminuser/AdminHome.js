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
import { PieChart } from "react-native-svg-charts";
import { Overlay } from "react-native-elements";

import { colors } from "../../assets/colors";
import { Avatar, Badge, Divider, Text, useTheme } from "react-native-paper";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function AdminHome(props) {
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
  const [showFilter, setShowFilter] = useState(false);
  const { styles } = useStyle();
  const datas = [
    {
      value: 12,
      svg: {
        fill: colors.BLUETYPE,
        onPress: () => console.log("press", index),
      },
      key: `1`,
    },
    {
      value: 18,
      svg: {
        fill: colors.YELLOWTYPE,
        onPress: () => console.log("press", index),
      },
      key: `2`,
    },
    {
      value: 28,
      svg: {
        fill: colors.GREENTYPE,
        onPress: () => console.log("press", index),
      },
      key: `3`,
    },
  ];
  const datasEmp = [
    {
      value: 30,
      svg: {
        fill: colors.BLUETYPE,
        onPress: () => console.log("press", index),
      },
      key: `1`,
    },
    {
      value: 80,
      svg: {
        fill: colors.YELLOWTYPE,
        onPress: () => console.log("press", index),
      },
      key: `2`,
    },
    {
      value: 40,
      svg: {
        fill: colors.GREENTYPE,
        onPress: () => console.log("press", index),
      },
      key: `3`,
    },
  ];
  const datasReq = [
    {
      value: 80,
      svg: {
        fill: colors.BLUETYPE,
        onPress: () => console.log("press", index),
      },
      key: `1`,
    },
    {
      value: 30,
      svg: {
        fill: colors.YELLOWTYPE,
        onPress: () => console.log("press", index),
      },
      key: `2`,
    },
    {
      value: 50,
      svg: {
        fill: colors.GREENTYPE,
        onPress: () => console.log("press", index),
      },
      key: `3`,
    },
  ];

  const pieData = datas;

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
  const FilterPOPUP = () => {
    return (
      <Overlay
        visible={showFilter}
        overlayStyle={{
          backgroundColor: theme.colors.background,
          marginTop: -height / 3.3,
          marginStart: width / 3,
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
                fontWeight: "bold",
                marginVertical: height / 200,
              }}
            ></Text>
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                color={colors.GRAY}
                size={height / 40}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.filterText}>Add Task</Text>
          <Divider style={{ backgroundColor: "gray" }} />
          <Text style={styles.filterText}>Add Employee</Text>
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
        <FilterPOPUP />
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
          ></Text>
          <TouchableOpacity onPress={() => setShowFilter(true)}>
            <Image
              source={require("../../assets/newtask.png")}
              style={{
                height: height / 11,
                width: width / 11,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
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
                Tasks
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
                22
              </Text>
              <View style={{ marginTop: -height / 110 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                    }}
                  >
                    {" "}
                    OPEN
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
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
                    }}
                  >
                    {" "}
                    DELAYED
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
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
                    }}
                  >
                    {" "}
                    COMPLETED
                  </Text>
                </View>
              </View>
              <PieChart
                style={{
                  height: height / 15,
                  width: height / 12,
                  marginTop: -10,
                }}
                data={pieData}
              />
            </View>
          </ImageBackground>

          <ImageBackground
            source={require("../../assets/adminheader.png")}
            style={{
              padding: 1,
              marginTop: height / 70,
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
                Employees
              </Text>
              <Text
                style={{
                  fontSize: height / 84,
                  color: "white",
                  fontWeight: "400",
                }}
              ></Text>
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
                12
              </Text>
              <View style={{ marginTop: -height / 110 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                    }}
                  >
                    {" "}
                    ON SITE
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
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
                    }}
                  >
                    {" "}
                    ABSENT
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
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
                    }}
                  >
                    {" "}
                    CLOCKED IN
                  </Text>
                </View>
              </View>
              <PieChart
                style={{
                  height: height / 15,
                  width: height / 12,
                  marginTop: -10,
                }}
                data={datasEmp}
              />
            </View>
          </ImageBackground>

          <ImageBackground
            source={require("../../assets/adminheader.png")}
            style={{
              padding: 1,
              marginTop: height / 70,
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
                Requests
              </Text>
              <Text
                style={{
                  fontSize: height / 84,
                  color: "white",
                  fontWeight: "400",
                }}
              ></Text>
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                    }}
                  >
                    {" "}
                    REASSIGN
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
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
                    }}
                  >
                    {" "}
                    RESCHEDULE
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
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
                    }}
                  >
                    {" "}
                    ATTENDANCE
                  </Text>
                </View>
              </View>
              <PieChart
                style={{
                  height: height / 15,
                  width: height / 12,
                  marginTop: -10,
                }}
                data={datasEmp}
              />
            </View>
          </ImageBackground>

          <ImageBackground
            source={require("../../assets/adminheader.png")}
            style={{
              padding: 1,
              marginTop: height / 70,
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
                Clock In
              </Text>
              <Text
                style={{
                  fontSize: height / 84,
                  color: "white",
                  fontWeight: "400",
                }}
              ></Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: height / 35,
                paddingVertical: 4,
              }}
            >
              <Text
                style={{
                  fontSize: height / 80,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                CLOCK IN TIME
              </Text>
              <Text
                style={{
                  fontSize: height / 80,
                  color: "white",
                  fontWeight: "500",
                }}
              >
                09:00 AM
              </Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: height / 35,
                paddingVertical: 4,
              }}
            >
              <Text
                style={{
                  fontSize: height / 80,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                ADMIN NAME
              </Text>
              <Text
                style={{
                  fontSize: height / 80,
                  color: "white",
                  fontWeight: "500",
                }}
              >
                MUSA RAZA
              </Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: height / 35,
                paddingVertical: 2,
              }}
            >
              <Text
                style={{
                  fontSize: height / 80,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                LOCATION
              </Text>
              <Text
                style={{
                  fontSize: height / 80,
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Pakistan
              </Text>
            </View>
          </ImageBackground>
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
    filterText: {
      fontSize: height / 60,
      color: colors.GRAY,
      fontWeight: "400",
      marginVertical: height / 200,
      marginTop: 10,
      paddingStart: 10,
    },
  });
  return { styles };
};
